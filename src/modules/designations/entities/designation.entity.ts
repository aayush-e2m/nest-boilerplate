import { BaseEntity } from '@/shared/entities/basic.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'designations' })
export class Designation extends BaseEntity {
  @Column({ length: 100, unique: true })
  name: string;
}
