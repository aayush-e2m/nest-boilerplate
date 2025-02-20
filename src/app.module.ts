import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '@config/typeorm.config';
import { BullModule } from '@nestjs/bullmq';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { CountriesModule } from './modules/countries/countries.module';
import { DesignationsModule } from './modules/designations/designations.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes it available globally
    }),
    //Database config
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: typeOrmConfig,
    }),
    //BullMQ
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    //Throttle rate limit
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 60,
      },
    ]),
    AuthModule,
    UsersModule,
    RolesModule,
    CountriesModule,
    DesignationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
