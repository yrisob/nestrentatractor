import { ICrudService } from './crud.service';
import {
  Type,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';

export interface ICrudHost {
  create(dto: any): Promise<any>;
  findAll(): Promise<any>;
  findById(id: number): Promise<any>;
  update(id: number, dto: any): Promise<any>;
  delete(id: number): Promise<any>;
}

export function CrudController(
  service: Type<ICrudService>,
  prefix: string,
): Type<ICrudHost> {
  @Controller(prefix)
  class CrudControllerHost implements ICrudHost {
    @Inject(service) readonly crudService;

    @Get()
    async findAll(): Promise<any> {
      return this.crudService.findAll();
    }

    @Get(':id')
    async findById(@Param('id', new ParseIntPipe()) id): Promise<any> {
      return this.crudService.findById(id);
    }

    @Post()
    async create(@Body() dto): Promise<any> {
      return this.crudService.create(dto);
    }

    @Patch(':id')
    async update(
      @Param('id', new ParseIntPipe()) id,
      @Body() dto,
    ): Promise<any> {
      return this.crudService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', new ParseIntPipe()) id): Promise<any> {
      return this.crudService.delete(id);
    }
  }
  return CrudControllerHost;
}
