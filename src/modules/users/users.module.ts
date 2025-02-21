import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RolesModule } from '../roles/roles.module';
import { AgencyDetails } from './entities/agency-details.entity';
import { DesignationsModule } from '../designations/designations.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, AgencyDetails]),
    RolesModule,
    DesignationsModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
