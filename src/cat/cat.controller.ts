import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  NotFoundException,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from '../models/cat';
import { AuthGuard } from '@nestjs/passport';

@Controller('cat')
export class CatController {
  constructor(private readonly catSetvice: CatService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createCat: Cat) {
    this.catSetvice.create(createCat);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return this.catSetvice.findAll();
  }

  @Get(':id')
  async findById(@Param('id', new ParseIntPipe()) id) {
    return this.catSetvice.findById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Param('id', new ParseIntPipe()) id, @Body() newData: Cat) {
    const updatedCat = this.catSetvice.update(+id, newData);
    if (updatedCat) {
      return updatedCat;
    } else {
      throw new NotFoundException(`Cat with the id=${id} not found`);
    }
  }
}
