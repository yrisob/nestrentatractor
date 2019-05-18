import {
  Type,
  Injectable,
  Inject,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import {
  InjectRepository,
  TypeOrmModule,
  InjectConnection,
} from '@nestjs/typeorm';
import { getRepository, Connection, Repository } from 'typeorm';
import { getEntityMadeOfDto } from '../utils/validate.class';

export interface ICrudService {
  getRepository(): Repository<any>;
  create(dto: any): Promise<any>;
  findAll(): Promise<any>;
  findById(id: number): Promise<any>;
  update(id: number, dto: any): Promise<any>;
  delete(id: number): Promise<any>;
}

export function CrudService(typeEntity: Type<any>): Type<ICrudService> {
  class CrudServiceHost implements ICrudService {
    protected serviceRepository: Repository<any>;

    constructor(
      @InjectConnection('default')
      private readonly connection: Connection,
    ) {
      this.serviceRepository = connection.getRepository(typeEntity);
    }

    getRepository(): Repository<any> {
      return this.serviceRepository;
    }

    async create(dto: any): Promise<any> {
      const someEntity = new typeEntity();
      const creatableEntity = getEntityMadeOfDto(someEntity, dto);
      if (!creatableEntity) {
        throw new BadRequestException('expected data for entity');
      } else {
        try {
          const result = await this.serviceRepository.save(creatableEntity);
          return result;
        } catch (e) {
          throw new BadRequestException(e.message);
        }
      }
    }

    async findAll(): Promise<any> {
      return this.serviceRepository.find();
    }

    async findById(id: number): Promise<any> {
      return this.serviceRepository.findOne(id);
    }

    async update(id: number, dto: any): Promise<any> {
      let foundEntity = await this.serviceRepository.findOne(id);
      if (!foundEntity) {
        throw new NotFoundException(`Entity with id=${id} not found`);
      } else {
        foundEntity = getEntityMadeOfDto(foundEntity, dto);

        if (!foundEntity) {
          throw new BadRequestException('expected data for entity');
        } else {
          try {
            const savedEntity = await this.serviceRepository.save(foundEntity);
            return savedEntity;
          } catch (e) {
            throw new BadRequestException({
              statusCode: 400,
              error: e.message,
            });
          }
        }
      }
    }

    async delete(id: number): Promise<any> {
      const itemForDel = await this.serviceRepository.findOne(id);
      if (itemForDel) {
        try {
          const removedEntity = await this.serviceRepository.remove(itemForDel);
          return removedEntity;
        } catch (e) {
          throw new BadRequestException(e.message);
        }
      } else {
        throw new NotFoundException(`element with id=${id} not found`);
      }
      return;
    }
  }

  return CrudServiceHost;
}
