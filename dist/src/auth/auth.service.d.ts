import { UserService } from '../user/user.service';
import { IUser } from '../models/interfaces/iuser.interface';
import { RegistrationStatus } from '../models/interfaces/registration-status.interface';
import { User } from '../entities/user.entity';
import { JwtPayload } from './interfaces/jwt.interface';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    registrate(user: IUser): Promise<RegistrationStatus>;
    createToken(user: User): {
        expiresIn: number;
        accessToken: string;
    };
    validateUser(payload: JwtPayload): Promise<any>;
}
