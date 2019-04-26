export interface ICrudService<T = any> {
  create(dto: T): Promise<any>;
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T>;
  update(id: number, dto: T): Promise<T>;
  delete(id: number): Promise<T>;
}
