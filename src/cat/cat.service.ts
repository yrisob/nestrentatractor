import { Injectable } from '@nestjs/common';
import { Cat } from 'src/models/cat';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findById(id: number): Cat {
    return this.cats.find(value => value.id === id);
  }

  update(id: number, newData: Cat): Cat | undefined {
    const updatedCat: Cat = this.findById(id);
    if (updatedCat) {
      updatedCat.name = newData.name;
      return updatedCat;
    } else {
      return undefined;
    }
  }
}
