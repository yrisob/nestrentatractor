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
  BadRequestException,
} from '@nestjs/common';
import { validateClasses } from '../utils/validate.class';

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
  typeDto: Type<object>,
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
      const validationResult = validateClasses(new typeDto(), dto);
      if (!validationResult) {
        return this.crudService.create(dto);
      } else {
        throw new BadRequestException(
          { error: validationResult },
          'bad request',
        );
      }
    }

    @Patch(':id')
    async update(
      @Param('id', new ParseIntPipe()) id,
      @Body() dto,
    ): Promise<any> {
      const validationResult = validateClasses(new typeDto(), dto);
      if (!validationResult) {
        return this.crudService.update(id, dto);
      } else {
        throw new BadRequestException(
          { error: validationResult },
          'bad request',
        );
      }
    }

    @Delete(':id')
    async delete(@Param('id', new ParseIntPipe()) id): Promise<any> {
      return this.crudService.delete(id);
    }
  }
  return CrudControllerHost;
}
