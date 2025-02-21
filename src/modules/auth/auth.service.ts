import {
  successResponse,
  successResponseWithData,
} from '@/shared/utils/reponses.utils';
import { UsersService } from '../users/users.service';
import { AUTH_STRING } from '@/shared/utils/string.utils';
import { logger } from '@/shared/utils/logger.utils';
import { instanceToPlain } from 'class-transformer';
import { iLoginPayload } from './dto/auth.dto';
import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

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
      //check if 2fa code is provided
      if (!data.code && !user.two_factor_auth_code) {
        return successResponse(res, AUTH_STRING.ERROR.TWO_FA_CODE_REQUIRED);
      }

      //check if 2fa code matches
      const isCodeMatch = await bcrypt.compare(
        data.code,
        user.two_factor_auth_code ?? 'no code',
      );
      if (!isCodeMatch) {
        return successResponse(res, AUTH_STRING.ERROR.INVALID_TWO_FA_CODE);
      }
    }

    //update user last login and last ip
    user.last_login = new Date();
    user.last_ip = req.socket.remoteAddress;
    await user.save();

    //generate jwt access and refresh token
    const payload = { userId: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    });

    return successResponseWithData(res, AUTH_STRING.SUCCESS.LOGIN_SUCCESS, {
      accessToken,
      refreshToken,
      user: instanceToPlain(user),
    });
  }
}
