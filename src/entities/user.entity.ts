import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VersionBase } from './versionbase.entity';

export enum UserRole {
  'customer',
  'operator',
  'manager',
  'administrator',
}

@Entity()
export class User extends VersionBase {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 150, primary: true, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 12, primary: true, unique: true })
  phone: string;

  @Column({ length: 20 })
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.customer })
  role?: UserRole;

  @Column('boolean', { default: false })
  confirmedEmail?: boolean;

  @Column('boolean', { default: false })
  confirmedPhone?: boolean;
}
