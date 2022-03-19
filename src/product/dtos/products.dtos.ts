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
    message: 'El precio del producto debe ser una cadena de texto',
  })
  @IsNotEmpty({
    message: 'El precio del producto no puede estar vacío',
  })
  readonly description: string;

  @IsNumber()
  @IsNotEmpty({
    message: 'El precio del producto no puede estar vacío',
  })
  readonly price: number;

  @IsString({
    message: 'El nombre del producto debe ser una cadena de texto',
  })
  @IsNotEmpty({
    message: 'El stock del producto no puede estar vacío',
  })
  readonly category: string;
}
