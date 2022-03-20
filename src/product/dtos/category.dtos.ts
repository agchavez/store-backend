import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CategoryDtos {
  @IsString({
    message: 'El nombre de la categoria debe ser una cadena de texto',
  })
  @IsNotEmpty({
    message: 'El nombre de la categoria no puede estar vacío',
  })
  readonly name: string;

  @IsString({
    message: 'La descripcion de la categoria debe ser una cadena de texto',
  })
  @IsNotEmpty({
    message: 'La descripcion de la categoria no puede estar vacío',
  })
  readonly description: string;

  @IsString({
    message: 'La imagen de la categoria debe ser una cadena de texto',
  })
  @IsNotEmpty({
    message: 'La imagen de la categoria no puede estar vacío',
  })
  readonly image: string;
}
