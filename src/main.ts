import { AllExceptionsFilter } from 'src/shared/filters/all-exceptions.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from 'src/shared/utils/logger.utils';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.enableCors();
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(process.env.PORT ?? 3000);

  logger.log(
    'info',
    `Application is running on: http://localhost:${process.env.PORT}`,
  );
}

bootstrap();
