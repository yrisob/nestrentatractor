import { CatService } from './cat.service';
import { Cat } from '../models/cat';
import { CrudController } from '../crud/crud.controller';

export class CatController extends CrudController(CatService, 'cat') {}
