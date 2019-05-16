import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatService } from './cat/cat.service';
import { CatController } from './cat/cat.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [AuthModule, UserModule, TypeOrmModule.forRoot()],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
