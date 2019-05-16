import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'cat' })
export class CatEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
  name: string;

  constructor() {
    this.id = undefined;
    this.name = '';
  }
}
