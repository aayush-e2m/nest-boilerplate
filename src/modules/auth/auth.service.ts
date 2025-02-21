import {
  successResponse,
  successResponseWithData,
} from '@/shared/utils/reponses.utils';
import { UsersService } from '../users/users.service';
import { AUTH_STRING } from '@/shared/utils/string.utils';
import { logger } from '@/shared/utils/logger.utils';
import { instanceToPlain } from 'class-transformer';
import { iLoginPayload } from './dto/auth.dto';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { generateCode } from '@/shared/utils/common.utils';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async staffLogin(req: Request, data: iLoginPayload, res: Response) {
    //find user by email
    const user = await this.usersService.findOneByEmail(data.email);
    if (!user) {
      return successResponse(res, AUTH_STRING.ERROR.INVALID_EMAIL_PASSWORD);
    }

    //check if user is active
    if (!user.active) {
      logger.info(
        `Inactive User Tried to Login [Email:${data.email}, Is Staff Member: yes, IP: ${req.socket.remoteAddress}]`,
      );
      return successResponse(res, AUTH_STRING.ERROR.INVALID_EMAIL_PASSWORD);
    }

    //check user verified his email or not
    if (!user.email_verified_at) {
      logger.info(
        `Login Verification Remain [Email:${data.email}, Is Staff Member: yes, IP: ${req.socket.remoteAddress}]`,
      );
      return successResponse(res, AUTH_STRING.ERROR.LOGIN_VERIFICATION_REMAIN);
    }

    //check if password matches
    const isPasswordMatch = await bcrypt.compare(data.password, user.password);
    if (!isPasswordMatch) {
      return successResponse(res, AUTH_STRING.ERROR.INVALID_EMAIL_PASSWORD);
    }

    //check if user has 2fa enabled
    if (user.two_factor_auth_enabled) {
      //check if 2fa code is provided and send code to email
      if (!data.code) {
        await this.sendTwoFactorAuthCode(user);
        return successResponse(
          res,
          AUTH_STRING.SUCCESS.TWO_FACTOR_AUTH_CODE_SENT,
        );
      }

      //check if 2fa code matches
      if (data.code) {
        if (data.code !== user.two_factor_auth_code) {
          throw new ForbiddenException(AUTH_STRING.ERROR.INVALID_TWO_FA_CODE);
        }
      }
    }

    //update user last login and last ip
    user.last_login = new Date();
    user.last_ip = req.socket.remoteAddress;
    await user.save();

    //generate jwt access and refresh token
    const { accessToken, refreshToken } = this.generateUserToken(user);

    return successResponseWithData(res, AUTH_STRING.SUCCESS.LOGIN_SUCCESS, {
      accessToken,
      refreshToken,
      user: instanceToPlain(user),
    });
  }

  private async sendTwoFactorAuthCode(user: User) {
    //generate 2fa code
    const code = generateCode(6);
    user.two_factor_auth_code = code;
    await user.save();
  }

  private generateUserToken(user: User) {
    const payload = { user: instanceToPlain(user) };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    });

    const refreshToken = this.jwtService.sign(
      {},
      {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
        audience: [user.id, user.role?.code].join(':'),
      },
    );

    return { accessToken, refreshToken };
  }
}
