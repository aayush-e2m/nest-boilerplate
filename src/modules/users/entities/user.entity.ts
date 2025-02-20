import { Roles } from '@/modules/roles/entities/role.entity';
import { BaseEntity } from '@/shared/entities/basic.entity';
import { Exclude } from 'class-transformer';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { AgencyDetails } from './agency-details.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 50 })
  firstname: string;

  @Column({ length: 50 })
  lastname: string;

  @Column({ nullable: true })
  facebook?: string;

  @Column({ nullable: true })
  linkedin?: string;

  @Column({ length: 30, nullable: true })
  phonenumber?: string;

  @Column({ length: 191, nullable: true })
  designation?: string;

  @Column({ length: 50, nullable: true })
  skype?: string;

  @Column({ length: 250, nullable: true })
  @Exclude()
  password?: string;

  @Column({ type: 'text', nullable: true })
  profile_image?: string;

  @Column({ length: 40, nullable: true })
  last_ip?: string;

  @Column({ type: 'timestamptz', nullable: true })
  last_login?: Date;

  @Column({ type: 'timestamptz', nullable: true })
  last_activity?: Date;

  @Column({ type: 'timestamptz', nullable: true })
  last_password_change?: Date;

  @Column({ length: 32, nullable: true })
  new_pass_key?: string;

  @Column({ type: 'timestamptz', nullable: true })
  new_pass_key_requested?: Date;

  @Column({ type: 'boolean', default: false })
  admin: boolean;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ length: 40, nullable: true })
  default_language?: string;

  @Column({ length: 3, nullable: true })
  direction?: string;

  @Column({ length: 300, nullable: true })
  media_path_slug?: string;

  @Column({ type: 'boolean', default: false })
  is_not_staff: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0.0 })
  hourly_rate: number;

  @Column({ type: 'boolean', default: false, nullable: true })
  two_factor_auth_enabled?: boolean;

  @Column({ type: 'varchar', length: 100, nullable: true })
  two_factor_auth_code?: string;

  @Column({ type: 'timestamptz', nullable: true })
  two_factor_auth_code_requested?: Date;

  @Column({ type: 'text', nullable: true })
  email_signature?: string;

  @Column({ type: 'boolean', default: true })
  task_emails: boolean;

  @Column({ type: 'boolean', default: true })
  task_status_emails: boolean;

  @Column({ type: 'boolean', default: true })
  project_emails: boolean;

  @Column({ type: 'timestamp with time zone', nullable: true })
  email_verified_at?: Date;

  @Column({ length: 100, nullable: true })
  email_verification_key?: string;

  @Column({ type: 'timestamp with time zone', nullable: true })
  email_verification_sent_at?: Date;

  @Column({ type: 'date', nullable: true })
  dob?: Date;

  @Column({ length: 100, nullable: true })
  gender?: string;

  @Column({ length: 250, nullable: true })
  time_zone?: string;

  @Exclude()
  @Column({ length: 250, nullable: true })
  device_fcm_token?: string;

  @Column({ type: 'boolean', default: false })
  is_wfh: boolean;

  @Column({ type: 'boolean', default: true })
  is_notification_send: boolean;

  @Column({ type: 'boolean', default: true })
  is_email_send: boolean;

  @Column({ type: 'date', nullable: true })
  date_of_joining?: Date;

  @ManyToOne(() => Roles, (role) => role.id, { nullable: true })
  @JoinColumn({ name: 'role_id' })
  role?: Roles;

  @OneToOne(() => AgencyDetails, (agency_detail) => agency_detail.id, {
    nullable: true,
  })
  @JoinColumn({ name: 'agency_detail_id' })
  agency_detail?: AgencyDetails;
}
