import { Strategy } from 'passport-jwt';
import { JwtPayload } from './interfaces/jwt.interface';
import { AuthService } from './auth.service';
declare const JwtStrategy_base: new (...args: any[]) => typeof Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(payload: JwtPayload): Promise<any>;
}
export {};
