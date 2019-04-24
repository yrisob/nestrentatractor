import { User } from '../models/user';
import { LoginRequest } from '../models/login-request';
import { IUser } from '../models/interfaces/iuser.interface';
export declare class UserService {
    private readonly users;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    create(newUser: IUser): Promise<void>;
    update(id: number, updateData: IUser): Promise<void>;
    delete(id: number): Promise<void>;
    findOneByEmail(email: string): Promise<User | undefined>;
    getUserByLoginData(login: LoginRequest): Promise<User | undefined>;
}
