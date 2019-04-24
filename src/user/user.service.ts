import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { LoginRequest } from '../models/login-request';
import { IUser } from '../models/interfaces/iuser.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return this.userRepository.find();
  }

  async findById(id: number) {
    return this.userRepository.findOne(id);
  }

  async create(newUser: IUser) {
    const insertedUser: User = {
      name: newUser.name,
      password: newUser.password,
      email: newUser.email,
      phone: newUser.phone,
    };
    await this.userRepository.save(insertedUser);
  }

  async update(id: number, updateData: IUser) {
    const foundUser: User = await this.userRepository.findOne(id);
    if (!foundUser) {
      throw new Error(`User with id=${id} not found`);
    } else {
      foundUser.name = updateData.name;
      foundUser.password = updateData.password;
      foundUser.email = updateData.email;
      foundUser.phone = updateData.phone;
      foundUser.confirmedEmail = updateData.confirmedEmail;
      foundUser.confirmedPhone = updateData.confirmedPhone;
      await this.userRepository.save(foundUser);
    }
  }

  async delete(id: number) {
    const itemForDel = await this.userRepository.findOne(id);
    if (itemForDel) {
      await this.userRepository.remove(itemForDel);
    } else {
      throw new Error('element not found');
    }
  }

  async findOneByEmail(insertEmail: string): Promise<User | undefined> {
    return this.userRepository.findOne({ email: insertEmail });
  }

  async getUserByLoginData(login: LoginRequest): Promise<User | undefined> {
    return this.userRepository.findOne({
      email: login.email,
      password: login.password,
    });
  }
}
