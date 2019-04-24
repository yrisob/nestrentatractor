import { IsInt, IsString } from 'class-validator';

export class Cat {
  @IsInt()
  id: number;

  @IsString()
  name: string;
}
