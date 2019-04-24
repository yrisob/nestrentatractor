import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const numberValue = parseInt(value, 10);
    if (isNaN(numberValue)) {
      throw new BadRequestException('Parametr should be a number');
    } else {
      return numberValue;
    }
  }
}
