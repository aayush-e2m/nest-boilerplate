import { BaseEntity } from '@/shared/entities/basic.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'countries' })
export class Countries extends BaseEntity {
  @Column({ length: 50 })
  name: string;

  @Column({ length: 5 })
  sortname: string;

  @Column({ length: 5 })
  phonecode: string;
}
