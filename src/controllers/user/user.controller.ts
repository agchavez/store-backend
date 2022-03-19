import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/')
  getUser(): string {
    return 'Listado de usuarios';
  }
}
