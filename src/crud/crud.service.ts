import { Type, Injectable, Inject, BadRequestException } from '@nestjs/common';
import {
  InjectRepository,
  TypeOrmModule,
  InjectConnection,
} from '@nestjs/typeorm';
import { getRepository, Connection, Repository } from 'typeorm';
import { getEntityMadeOfDto } from '../utils/validate.class';
import { CatRepository } from 'src/cat/cat.repository';

export interface ICrudService {
  create(dto: any): Promise<any>;
  findAll(): Promise<any>;
  findById(id: number): Promise<any>;
  update(id: number, dto: any): Promise<any>;
  delete(id: number): Promise<any>;
}

export function CrudService(typeEntity: Type<any>): Type<ICrudService> {
  class CrudServiceHost implements ICrudService {
    private readonly serviceRepository: Repository<any>;

    constructor(
      @InjectConnection('default')
      private readonly connection: Connection,
    ) {
      this.serviceRepository = connection.getRepository(typeEntity);
    }

    async create(dto: any): Promise<any> {
      const someEntity = new typeEntity();
      const creatableEntity = getEntityMadeOfDto(someEntity, dto);
      if (!creatableEntity) {
        throw new BadRequestException(
          { error: 'expected data for entity ' },
          'bad request',
        );
      } else {
        try {
          const result = await this.serviceRepository.save(creatableEntity);
          return result;
        } catch (e) {
          throw new BadRequestException({ error: e.message }, 'bad request');
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
        throw new Error(`Entity with id=${id} not found`);
      } else {
        foundEntity = getEntityMadeOfDto(foundEntity, dto);

        if (!foundEntity) {
          throw new Error('expected data for entity ');
        } else {
          return this.serviceRepository.save(foundEntity);
        }
      }
    }

    async delete(id: number): Promise<any> {
      const itemForDel = await this.serviceRepository.findOne(id);
      if (itemForDel) {
        return this.serviceRepository.remove(itemForDel);
      } else {
        throw new Error('element not found');
      }
      return;
    }
  }

  return CrudServiceHost;
}
