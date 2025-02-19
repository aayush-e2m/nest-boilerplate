import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { logger } from '../utils/logger.utils';
import { COMMON_ERROR_STRING } from '../utils/string.utils';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = 500;
    let message = COMMON_ERROR_STRING.INTERNAL_SERVER_ERROR;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const errorResponse = exception.getResponse();

      // Check if errorResponse is an object and extract the message accordingly
      if (typeof errorResponse === 'string') {
        message = errorResponse;
      } else if (typeof errorResponse === 'object' && errorResponse !== null) {
        const errorMessage = (errorResponse as { message?: string }).message;
        message = errorMessage || JSON.stringify(errorResponse);
      }
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    logger.log('error', `Status: ${status}, Message: ${message}`);
    response.status(status).json({ status: false, message });
  }
}
