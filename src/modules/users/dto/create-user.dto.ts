import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  role: number;

  admin: number;

  facebook: string;

  linkedin: string;

  phonenumber: string;

  designation: string;

  skype: string;

  profile_image: string;

  last_ip: string;

  last_login: Date;

  last_activity: Date;

  last_password_change: Date;

  new_pass_key: string;

  new_pass_key_requested: Date;

  active: boolean;
}
