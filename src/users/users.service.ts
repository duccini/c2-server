import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
// import { User } from './entities/user/user.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  logger = new Logger(UsersService.name);
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(userDto: CreateUserDto): Promise<User> {
    try {
      const checkEmailUser = await this.findByEmail(userDto.email);

      const checkLinkedinUser = await this.userRepository.findOne({
        where: { linkedin: userDto.linkedin },
      });

      const checkGitHubUser = await this.userRepository.findOne({
        where: { github: userDto.github },
      });

      if (checkEmailUser) throw new ConflictException('Usuário já cadastrado!');

      if (checkLinkedinUser)
        throw new ConflictException('Linkedin já cadastrado!');

      if (checkGitHubUser) throw new ConflictException('GitHub já cadastrado!');

      return this.userRepository.save(userDto);
    } catch (error) {
      console.log(error.message);
      throw new BadRequestException(error.message);
    }
  }

  async findAll(): Promise<User[] | null> {
    return this.userRepository.find();
  }

  async getUser(id: UUID) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user)
      throw new NotFoundException('Usuário não existe no banco de dados!');

    return user;
  }

  async update(id: UUID, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new NotFoundException(`Usuário com o id: ${id} não foi encontrado`);

    user.email = updateUserDto.email || user.email;
    user.password = updateUserDto.password || user.password;

    return this.userRepository.save(user);
  }

  async remove(id: UUID): Promise<string> {
    const user = await this.userRepository.findBy({ id });
    if (!user)
      throw new NotFoundException(`Usuário com o id ${id} não encontrado`);

    this.userRepository.remove(user);
    return 'Usuário Removido';
  }

  findByEmail(userEmail: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        email: userEmail,
      },
    });
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.findByEmail(email);

    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
