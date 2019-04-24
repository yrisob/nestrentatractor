import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { IUser } from '../models/interfaces/iuser.interface';
import { RegistrationStatus } from '../models/interfaces/registration-status.interface';
import * as jwt from 'jsonwebtoken';
import { User } from '../entities/user.entity';
import { JwtPayload } from './interfaces/jwt.interface';
import { Config } from '../config/config';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async registrate(user: IUser) {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registrated',
    };
    try {
      await this.userService.create(user);
    } catch (error) {
      status = { success: false, message: error };
    }
    return status;
  }

  createToken(user: User) {
    // tslint:disable-next-line:no-console
    console.log('get the expiration');
    const expiresIn = Config.expiresIn;
    // tslint:disable-next-line:no-console
    console.log('sign the token');
    // tslint:disable-next-line:no-console
    console.log(user);

    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        phone: user.phone,
        name: user.name,
      },
      Config.jwtSecretKey,
      { expiresIn },
    );
    // tslint:disable-next-line:no-console
    console.log('return the token');
    // tslint:disable-next-line:no-console
    console.log(accessToken);
    return {
      expiresIn,
      accessToken,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.userService.findById(payload.id);
  }
}
