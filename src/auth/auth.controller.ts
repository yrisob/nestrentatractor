import {
  Controller,
  Post,
  UsePipes,
  Body,
  ValidationPipe,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginRequest } from '../models/login-request';
import { IUser } from '../models/interfaces/iuser.interface';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  @UsePipes(new ValidationPipe({ transform: true }))
  public async register(@Body() createUserDto: IUser) {
    const result = await this.authService.registrate(createUserDto);
    if (!result.success) {
      throw new BadRequestException(result.message);
    }
    return result;
  }

  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true }))
  public async login(@Body() login: LoginRequest) {
    return await this.usersService.getUserByLoginData(login).then(user => {
      if (!user) {
        throw new BadRequestException(
          'user with same login or password not found',
        );
      } else {
        const token = this.authService.createToken(user);
        return {
          success: true,
          assecc_token: token,
        };
      }
    });
  }
}
