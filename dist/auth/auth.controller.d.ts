import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginRequest } from '../models/login-request';
import { IUser } from '../models/interfaces/iuser.interface';
export declare class AuthController {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UserService, authService: AuthService);
    register(createUserDto: IUser): Promise<import("../models/interfaces/registration-status.interface").RegistrationStatus>;
    login(login: LoginRequest): Promise<{
        success: boolean;
        assecc_token: {
            expiresIn: number;
            accessToken: string;
        };
    }>;
}
