import { Injectable } from '@nestjs/common';
import { Cat } from '../models/cat';
import { CrudService, ICrudService } from '../crud/crud.service';
import { CatEntity } from '../entities/cat.entity';
import { CatRepository } from './cat.repository';

// @Injectable()
// export class CatService implements ICrudService<Cat> {
//   private readonly cats: Cat[] = [];

//   async create(cat: Cat): Promise<Cat> {
//     this.cats.push(cat);
//     return cat;
//   }

//   async findAll(): Promise<Cat[]> {
//     return this.cats;
//   }

//   async findById(id: number): Promise<Cat> {
//     return this.cats.find(value => value.id === id);
//   }

//   async update(id: number, newData: Cat): Promise<Cat> {
//     const updatedCat: Cat = await this.findById(id);
//     if (updatedCat) {
//       updatedCat.name = newData.name;
//       return updatedCat;
//     } else {
//       return undefined;
//     }
//   }

//   async delete(id: number): Promise<Cat> {
//     const index = this.cats.findIndex(el => el.id === id);
//     if (index < 0) {
//       return undefined;
//     }
//     return this.cats.splice(index, 1)[0];
//   }
// }

@Injectable()
export class CatService extends CrudService(CatEntity)
  implements ICrudService {}
