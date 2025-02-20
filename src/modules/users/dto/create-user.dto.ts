import { EnumGender } from '@/shared/types/roles.t';
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  phonenumber: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  roleId: string;

  @IsEnum(EnumGender)
  gender: EnumGender;

  @IsDateString()
  dob: Date;

  @IsDateString()
  date_of_joining: Date;

  @IsString()
  google_drive: string;

  @IsString()
  calendly_url: string;

  @IsString()
  agent_profile_preferences: string;

  @IsBoolean()
  is_wfh: boolean;

  @IsString()
  email_signature: string;

  @IsBoolean()
  @IsOptional()
  admin: boolean;

  @IsUUID()
  @IsOptional()
  designationId: string;

  profile_image: string;

  @IsUUID()
  @IsOptional()
  agencyId: string; //for agent members

  agency_name: string; //for agency

  country: string; //for agency

  state: string; //for agency

  city: string; //for agency

  zipcode: string; //for agency
}
