import { CatService } from './cat.service';
import { Cat } from '../models/cat';
import { CrudController } from '../crud/crud.controller';
import { Type, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export class CatController extends CrudController(CatService, 'cat', Cat, {
  deleteGuard: AuthGuard('jwt'),
}) {}
