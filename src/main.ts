import { AllExceptionsFilter } from './shared/filters/all-exceptions.filter';
import { logger } from '@utils/logger.utils';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.enableCors();
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);

  logger.log(
    'info',
    `Application is running on: http://localhost:${process.env.PORT}`,
  );
}

bootstrap();
