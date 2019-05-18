import { Type } from '@nestjs/common';
import { Repository } from 'typeorm';
export interface ICrudService {
    getRepository(): Repository<any>;
    create(dto: any): Promise<any>;
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    update(id: number, dto: any): Promise<any>;
    delete(id: number): Promise<any>;
}
export declare function CrudService(typeEntity: Type<any>): Type<ICrudService>;
