import { ICrudService } from './crud.service';
import { Type } from '@nestjs/common';
export interface ICrudHost {
    create(dto: any): Promise<any>;
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    update(id: number, dto: any): Promise<any>;
    delete(id: number): Promise<any>;
}
export declare function CrudController(service: Type<ICrudService>, prefix: string, typeDto: Type<object>, { findAllGuard, findByIDGuard, createGuard, updateGuard, deleteGuard, }?: {
    findAllGuard?: any;
    findByIDGuard?: any;
    createGuard?: any;
    updateGuard?: any;
    deleteGuard?: any;
}): Type<ICrudHost>;
