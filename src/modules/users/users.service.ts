import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RolesService } from '../roles/roles.service';
import { successResponseWithData } from '@/shared/utils/reponses.utils';
import { Response } from 'express';
import { USERS_STRING } from '@/shared/utils/string.utils';
import { instanceToPlain } from 'class-transformer';
// import { StripeService } from '@/shared/services/stripe.service';
// import { MailerLiteService } from '@/shared/services/mailerlite.service';
import moment from 'moment';
import { ROLES_TYPES } from '@/shared/types/roles.t';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly roleService: RolesService,
    // private readonly stripeService: StripeService,
    // private readonly mailerLiteService: MailerLiteService,
  ) {}

  async create(createUserDto: CreateUserDto, res: Response) {
    const role = await this.roleService.getRoleById(createUserDto.roleId);
    const isExistUser = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });

    if (isExistUser) {
      throw new ConflictException(USERS_STRING.ERROR.USER_EXIST);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    const verificationCode = await bcrypt.hash(
      createUserDto.email + Date.now() + Math.random().toString(),
      salt,
    );

    const formattedDate = moment().format('YYYY-MM-DD HH:mm:ss');

    // let stripeCustomerId = '';
    // if (role.code === ROLES_TYPES.IS_AGENCY_OWNER_ROLE_CODE) {
    //   const countryCode = 'US'; // Fetch dynamically if needed
    //   const customer = await this.stripeService.createCustomer(
    //     createUserDto.email,
    //     `${createUserDto.firstname} ${createUserDto.lastname}`,
    //     countryCode,
    //   );
    //   stripeCustomerId = customer.id;
    //   await this.mailerLiteService.addUser(
    //     createUserDto,
    //     process.env.DEV_GROUP_ID,
    //   );
    // }
    // console.log(stripeCustomerId);

    const user = this.userRepository.create({
      firstname: createUserDto.firstname,
      lastname: createUserDto.lastname,
      email: createUserDto.email,
      password: hashedPassword,
      role,
      email_verification_key: verificationCode.replace(/\//g, ''),
      email_verified_at: formattedDate,
      created_at: formattedDate,
      // stripeCustomerId,
    });

    await this.userRepository.save(user);

    successResponseWithData(
      res,
      USERS_STRING.SUCCESS.USER_CREATED,
      instanceToPlain(user),
    );
  }
}
