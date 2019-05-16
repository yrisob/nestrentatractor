import { User } from '../entities/user.entity';
import { LoginRequest } from '../models/login-request';
import { IUser } from '../models/interfaces/iuser.interface';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    create(newUser: IUser): Promise<void>;
    update(id: number, updateData: IUser): Promise<void>;
    delete(id: number): Promise<void>;
    findOneByEmail(insertEmail: string): Promise<User | undefined>;
    getUserByLoginData(login: LoginRequest): Promise<User | undefined>;
}
