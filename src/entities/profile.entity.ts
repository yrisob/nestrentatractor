import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { VersionBase } from './versionbase.entity';

@Entity()
export class Profile extends VersionBase {
  @Column({ type: 'varchar', length: 100 })
  imgUrL?: string;

  @Column({ type: 'text' })
  description?: string;
}
