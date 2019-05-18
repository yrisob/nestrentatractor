import { ICrudService } from '../crud/crud.service';
declare const CatService_base: import("@nestjs/common").Type<ICrudService>;
export declare class CatService extends CatService_base implements ICrudService {
    getCatsByName(inner_name: string): Promise<any>;
}
export {};
