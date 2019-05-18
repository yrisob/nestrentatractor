import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { VersionBase } from './versionbase.entity';

@Entity({ name: 'cat' })
export class CatEntity extends VersionBase {
  @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
  name: string;

  constructor() {
    super();
    this.id = undefined;
    this.name = '';
  }
}
