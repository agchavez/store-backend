import { Controller, Get } from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get('/')
  getProducts(): string {
    return 'Listado de productos';
  }
}
