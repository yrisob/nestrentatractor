import { UserService } from './user.service';
import { IUser } from '../models/interfaces/iuser.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<import("../entities/user.entity").User[]>;
    findByID(id: number): Promise<import("../entities/user.entity").User>;
    create(userInfo: IUser): Promise<void>;
    update(id: number, updatedData: IUser): Promise<void>;
    delete(id: number): Promise<void>;
}
