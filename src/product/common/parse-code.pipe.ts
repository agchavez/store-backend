import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseCodePipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    //Validar codigos de identidad de usuario
    const regex = /^[0-9]{4}-[0-9]{4}$/;
    if (!regex.test(value)) {
      throw new BadRequestException('Codigo de identidad invalido');
    }
    return value;
  }
}
