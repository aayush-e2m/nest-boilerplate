import { BaseEntity } from '@/shared/entities/basic.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'roles' })
export class Roles extends BaseEntity {
  @Column({ length: 100, unique: true })
  code: string;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'text' })
  permissions: string;
}
