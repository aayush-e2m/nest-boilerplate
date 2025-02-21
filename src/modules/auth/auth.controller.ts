import { Controller, Post, Req, Res, Body } from '@nestjs/common';
import { iLoginPayload } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() data: iLoginPayload,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return await this.authService.staffLogin(req, data, res);
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
