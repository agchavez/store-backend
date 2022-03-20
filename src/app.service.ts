import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('API_KEY') private readonly API_KEY: string) {}
  getHello(): string {
    return 'Hola mundo desde nest!';
  }
}
