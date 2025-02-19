import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { logger } from '@utils/logger';
import { COMMON_ERROR_STRING } from '@utils/string';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = 500;
    let message = COMMON_ERROR_STRING.INTERNAL_SERVER_ERROR;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.getResponse() as string;
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    logger.log('error', `Status: ${status}, Message: ${message}`);
    response.status(status).json({ status, message });
  }
}
