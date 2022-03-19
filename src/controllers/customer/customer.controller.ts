import { Controller, Get } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  @Get('/')
  getCustomer(): string {
    return 'Listado de clientes';
  }
}
