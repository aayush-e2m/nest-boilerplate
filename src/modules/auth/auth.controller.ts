import {
  Controller,
  Post,
  Req,
  Res,
  UseGuards,
  Body,
  Headers,
} from '@nestjs/common';
// import { AuthService } from '../../services/authenticate';
// import { ApiResponse } from '../../helpers/ApiResponses';
// import { ValidateRequestSchema } from '../../helpers/ValidateRequestSchema';
// import { LoginValidation } from '../../validation/loginValidator';
// import { TwoFactorValidation } from '../../validation/twoFactorValidator';
// import { AuthenticateJWT } from '../../middleware/authenticateJWT';
// import { GeneralHelper } from '../../helpers/general';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { LoginValidation } from './dto/auth.dto';
import { ErrorResponse } from '@utils/reponses.utils';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: LoginValidation, @Res() res: Response) {
    try {
      const staffLogin = await this.authService.staffLogin(data);

      if (!staffLogin) {
        await this.authService.clientLogin(data, res);
      }
    } catch (ex) {
      return ErrorResponse(res, { msg: ex });
    }
  }

  // @Post('generate-token')
  // async generateToken(
  //   @Headers('authorization') authHeader: string,
  //   @Res() res: Response,
  // ) {
  //   try {
  //     const token = authHeader.split(' ')[1];
  //     await this.authService.generateToken(authHeader, token, res);
  //   } catch (ex) {
  //     return ApiResponse.ErrorResponse(res, { msg: ex });
  //   }
  // }

  // @Post('logout')
  // async logout(
  //   @Headers('authorization') authHeader: string,
  //   @Res() res: Response,
  // ) {
  //   try {
  //     const token = authHeader.split(' ')[1];
  //     await this.authService.destroyToken(authHeader, token, res);
  //     return ApiResponse.successResponse(res, 'Logout successfully!');
  //   } catch (ex) {
  //     return ApiResponse.ErrorResponse(res, { msg: ex });
  //   }
  // }

  // @Post('two-factor-authentication')
  // @UseGuards(AuthenticateJWT, TwoFactorValidation, ValidateRequestSchema)
  // async twoFactorAuthentication(@Req() req: Request, @Res() res: Response) {
  //   try {
  //     const loginData = req.body;
  //     await this.authService.staffTwoFactorAuth(req, loginData, res);
  //   } catch (ex) {
  //     return ApiResponse.ErrorResponse(res, { msg: ex });
  //   }
  // }

  // @Post('auto-login')
  // @UseGuards(AuthenticateJWT)
  // async autoLogin(@Req() req: Request, @Res() res: Response) {
  //   try {
  //     await this.authService.StaffAutoLogin(req, req.body, res);
  //   } catch (ex) {
  //     return ApiResponse.ErrorResponse(res, { msg: ex });
  //   }
  // }
}
