import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserDtos } from '../dtos/user.dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}
  @Get()
  async getUsers(@Query('limit') limit = 10, @Query('offset') offset = 0) {
    return await this.UserService.getUsers(limit, offset);
  }

  @Post()
  async createUser(@Body() body: UserDtos) {
    return await this.UserService.createUser(body);
  }
}
