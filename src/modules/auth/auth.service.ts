import { Injectable } from '@nestjs/common';
import { LoginValidation } from './dto/auth.dto';
import { successResponse } from '@/shared/utils/reponses.utils';
import { Response } from 'express';

@Injectable()
export class AuthService {
  staffLogin(data: LoginValidation) {
    console.log(data);

    return false;
  }

  clientLogin(data: LoginValidation, res: Response) {
    console.log(data);
    successResponse(res, 'Client login');
  }
}
