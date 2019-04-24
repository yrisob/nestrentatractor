import { Cat } from 'src/models/cat';
export declare class CatService {
    private readonly cats;
    create(cat: Cat): void;
    findAll(): Cat[];
    findById(id: number): Cat;
    update(id: number, newData: Cat): Cat | undefined;
}
