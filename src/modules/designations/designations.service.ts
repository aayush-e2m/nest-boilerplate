import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDesignationDto } from './dto/create-designation.dto';
import { UpdateDesignationDto } from './dto/update-designation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Designation } from './entities/designation.entity';
import { Repository } from 'typeorm';
import { DESIGNATION_STRING } from '@/shared/utils/string.utils';

@Injectable()
export class DesignationsService {
  constructor(
    @InjectRepository(Designation)
    private readonly designationRepository: Repository<Designation>,
  ) {}

  create(createDesignationDto: CreateDesignationDto) {
    return 'This action adds a new designation';
  }

  findAll() {
    return `This action returns all designations`;
  }

  async findOne(id: string): Promise<Designation> {
    const designation = await this.designationRepository.findOneBy({ id });
    if (!designation) {
      throw new NotFoundException(
        DESIGNATION_STRING.ERROR.DESIGNATION_NOT_FOUND,
      );
    }
    return designation;
  }

  update(id: string, updateDesignationDto: UpdateDesignationDto) {
    return `This action updates a #${id} designation`;
  }

  remove(id: string) {
    return `This action removes a #${id} designation`;
  }
}
