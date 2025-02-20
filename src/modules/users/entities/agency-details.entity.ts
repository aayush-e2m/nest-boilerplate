import { BaseEntity } from '@/shared/entities/basic.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'agency_details' })
export class AgencyDetails extends BaseEntity {
  @Column({ nullable: true })
  agency_name?: string;

  @Column({ length: 50, nullable: true })
  country?: string;

  @Column({ length: 50, nullable: true })
  state?: string;

  @Column({ length: 50, nullable: true })
  city?: string;

  @Column({ length: 10, nullable: true })
  zipcode?: string;
}
