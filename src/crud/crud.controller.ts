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
  UseGuards,
} from '@nestjs/common';
import { validateClasses } from '../utils/validate.class';
import { DefaultGuard } from './default_settings/default.guard';

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
  {
    findAllGuard,
    findByIDGuard,
    createGuard,
    updateGuard,
    deleteGuard,
  }: {
    findAllGuard?: any;
    findByIDGuard?: any;
    createGuard?: any;
    updateGuard?: any;
    deleteGuard?: any;
  } = {},
): Type<ICrudHost> {
  @Controller(prefix)
  class CrudControllerHost implements ICrudHost {
    @Inject(service) readonly crudService;

    getService(): ICrudService {
      return this.crudService;
    }

    @Get()
    @UseGuards(findAllGuard ? findAllGuard : DefaultGuard)
    async findAll(): Promise<any> {
      return this.crudService.findAll();
    }

    @Get(':id')
    @UseGuards(findByIDGuard ? findByIDGuard : DefaultGuard)
    async findById(@Param('id', new ParseIntPipe()) id): Promise<any> {
      return this.crudService.findById(id);
    }

    @Post()
    @UseGuards(createGuard ? createGuard : DefaultGuard)
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
    @UseGuards(updateGuard ? updateGuard : DefaultGuard)
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
    @UseGuards(deleteGuard ? deleteGuard : DefaultGuard)
    async delete(@Param('id', new ParseIntPipe()) id): Promise<any> {
      return this.crudService.delete(id);
    }
  }
  return CrudControllerHost;
}
