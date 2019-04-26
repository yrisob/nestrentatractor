import { IsInt, IsString } from 'class-validator';

export class Cat {
  @IsInt()
  id: number | undefined = undefined;

  @IsString()
  name: string | undefined = undefined;
}
