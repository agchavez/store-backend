import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserDtos } from '../dtos/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUsers(limit: number, offset: number) {
    const query = await Promise.all([
      this.userRepository.find({
        take: limit,
        skip: offset,
      }),
      this.userRepository.count(),
    ]);
    return {
      users: query[0],
      count: query[1],
    };
  }

  async getUserById(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async createUser(user: UserDtos): Promise<User> {
    try {
      //Buscar si existe el usuario con el email o el username
      const searchUser = await this.userRepository.find({
        where: [{ email: user.email }, { username: user.username }],
      });
      if (searchUser.length > 0) {
        throw new NotFoundException(
          `El usuario con email ${user.email} o username ${user.username} ya existe`,
        );
      }

      const newUser = this.userRepository.create(user);
      return await this.userRepository.save(newUser);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new NotFoundException(`Error al crear el usuario`);
      }
    }
  }
}
