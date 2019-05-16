import { CatEntity } from '../entities/cat.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(CatEntity)
export class CatRepository extends Repository<CatEntity> {}
