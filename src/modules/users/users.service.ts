import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RolesService } from '../roles/roles.service';
import { successResponseWithData } from '@/shared/utils/reponses.utils';
import { Response } from 'express';
import { USERS_STRING } from '@/shared/utils/string.utils';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly roleService: RolesService,
  ) {}

  async create(createUserDto: CreateUserDto, res: Response) {
    const role = await this.roleService.getRoleById(createUserDto.roleId);
    const isExistUser = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });

    if (isExistUser) {
      throw new ConflictException(USERS_STRING.ERROR.USER_EXIST);
    }

    const user = this.userRepository.create({
      firstname: createUserDto.firstname,
      lastname: createUserDto.lastname,
      email: createUserDto.email,
      password: createUserDto.password,
      role: role,
    });

    await user.save();

    successResponseWithData(
      res,
      USERS_STRING.SUCCESS.USER_CREATED,
      instanceToPlain(user),
    );
  }
}
