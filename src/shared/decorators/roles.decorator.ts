import { SetMetadata } from '@nestjs/common';
import { EnumRoleType } from '../types/roles.t';

export const Roles = (...roles: EnumRoleType[]) => SetMetadata('roles', roles);
