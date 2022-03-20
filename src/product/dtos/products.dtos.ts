import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString({
    message: 'El nombre del producto debe ser una cadena de texto',
  })
  @IsNotEmpty({
    message: 'El nombre del producto no puede estar vacío',
  })
  readonly name: string;

  @IsString({
    message: 'La descripcion del producto debe ser una cadena de texto',
  })
  @IsNotEmpty({
    message: 'La descripcion del producto no puede estar vacío',
  })
  readonly description: string;

  @IsNumber()
  @IsNotEmpty({
    message: 'El precio del producto no puede estar vacío',
  })
  readonly price: number;

  @IsNumber()
  @IsNotEmpty({
    message: 'La categoria del producto no puede estar vacío',
  })
  readonly category: number;

  @IsString({
    message: 'El nombre del producto debe ser una cadena de texto',
  })
  @IsNotEmpty({
    message: 'El nombre del producto no puede estar vacío',
  })
  readonly image: string;
}
