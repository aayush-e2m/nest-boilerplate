import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from './entities/role.entity';
import { ROLES_STRING } from '@/shared/utils/string.utils';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private readonly roleRepository: Repository<Roles>,
  ) {}

  async getRoleById(id: string): Promise<Roles> {
    const role = await this.roleRepository.findOneBy({ id });
    if (!role) {
      throw new BadRequestException(ROLES_STRING.ERROR.ROLE_NOT_FOUND);
    }
    return role;
  }
}
