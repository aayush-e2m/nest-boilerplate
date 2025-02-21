import { EnumGender } from '@/shared/types/roles.t';
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  IsUrl,
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

  @IsNumberString()
  @IsOptional()
  phonenumber: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  roleId: string;

  @IsEnum(EnumGender)
  @IsOptional()
  gender: EnumGender;

  @IsDateString()
  @IsOptional()
  dob: Date;

  @IsDateString()
  @IsOptional()
  date_of_joining: Date;

  @IsUrl()
  @IsOptional()
  google_drive: string;

  @IsUrl()
  @IsOptional()
  calendly_url: string;

  @IsString()
  @IsOptional()
  agent_profile_preferences: string;

  @IsBoolean()
  @IsOptional()
  is_wfh: boolean;

  @IsString()
  @IsOptional()
  email_signature: string;

  @IsBoolean()
  @IsOptional()
  admin: boolean;

  @IsUUID()
  @IsOptional()
  designationId: string;

  @IsString()
  @IsOptional()
  profile_image: string;

  @IsUUID()
  @IsOptional()
  agencyId: string; //for agent members

  @IsString()
  @IsOptional()
  agency_name: string; //for agency

  @IsString()
  @IsOptional()
  country: string; //for agency

  @IsString()
  @IsOptional()
  state: string; //for agency

  @IsString()
  @IsOptional()
  city: string; //for agency

  @IsNumberString()
  @IsOptional()
  zipcode: string; //for agency
}
