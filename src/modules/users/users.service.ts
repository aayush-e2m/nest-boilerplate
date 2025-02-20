import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DeepPartial, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RolesService } from '../roles/roles.service';
import { successResponseWithData } from '@/shared/utils/reponses.utils';
import { Response } from 'express';
import { USERS_STRING } from '@/shared/utils/string.utils';
import { instanceToPlain } from 'class-transformer';
import { ROLES_TYPES } from '@/shared/types/roles.t';
import { AgencyDetails } from './entities/agency-details.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(AgencyDetails)
    private readonly agentDetailsRepository: Repository<AgencyDetails>,
    private readonly roleService: RolesService,
  ) {}

  async create(createUserDto: CreateUserDto, res: Response) {
    const role = await this.roleService.getRoleById(createUserDto.roleId);

    //check if user already exist
    const isExistUser = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });

    if (isExistUser) {
      throw new ConflictException(USERS_STRING.ERROR.USER_EXIST);
    }

    //hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    const verificationCode = await bcrypt.hash(
      createUserDto.email + Date.now() + Math.random().toString(),
      salt,
    );

    //user payload
    const userPayload: DeepPartial<User> = {
      firstname: createUserDto.firstname,
      lastname: createUserDto.lastname,
      email: createUserDto.email,
      password: hashedPassword,
      role,
      email_verification_key: verificationCode.replace(/\//g, ''),
      email_verified_at: new Date(),
    };

    //If role type is agency then create agency details
    if (role.code === ROLES_TYPES.IS_AGENCY_OWNER_ROLE_CODE) {
      const agentdetails = this.agentDetailsRepository.create({
        agency_name: createUserDto.agency_name,
        country: createUserDto.country,
        state: createUserDto.state,
        city: createUserDto.city,
        zipcode: createUserDto.zipcode,
      });
      await agentdetails.save();
      userPayload.agency_detail = agentdetails;
    }

    //save and return user
    const user = this.userRepository.create(userPayload);
    await this.userRepository.insert(user);

    successResponseWithData(
      res,
      USERS_STRING.SUCCESS.USER_CREATED,
      instanceToPlain(user),
    );
  }
}
