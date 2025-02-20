import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RolesModule } from '../roles/roles.module';
import { AgencyDetails } from './entities/agency-details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, AgencyDetails]), RolesModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
