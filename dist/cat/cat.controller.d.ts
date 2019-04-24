import { CatService } from './cat.service';
import { Cat } from '../models/cat';
export declare class CatController {
    private readonly catSetvice;
    constructor(catSetvice: CatService);
    create(createCat: Cat): Promise<void>;
    findAll(): Promise<Cat[]>;
    findById(id: any): Promise<Cat>;
    update(id: any, newData: Cat): Promise<Cat>;
}
