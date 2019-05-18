import { VersionBase } from './versionbase.entity';
export declare enum UserRole {
    'customer' = 0,
    'operator' = 1,
    'manager' = 2,
    'administrator' = 3
}
export declare class User extends VersionBase {
    name: string;
    email: string;
    phone: string;
    password: string;
    role?: UserRole;
    confirmedEmail?: boolean;
    confirmedPhone?: boolean;
}
