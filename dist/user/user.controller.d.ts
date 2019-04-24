import { UserService } from './user.service';
import { IUser } from '../models/interfaces/iuser.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<import("../models/user").User[]>;
    findByID(id: number): Promise<import("../models/user").User>;
    create(userInfo: IUser): Promise<void>;
    update(id: number, updatedData: IUser): Promise<void>;
    delete(id: number): Promise<void>;
}
