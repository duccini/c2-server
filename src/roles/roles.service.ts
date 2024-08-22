import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { UUID } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async createRole(createRoleDto: CreateRoleDto) {
    try {
      const checkRole = await this.roleRepository.findOne({
        where: {
          role: createRoleDto.role,
        },
      });

      if (checkRole) throw new BadRequestException('Função já cadastrada');
      return await this.roleRepository.save(createRoleDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getAllRoles(): Promise<Role[]> {
    try {
      const roles = await this.roleRepository.find();

      if (roles.length === 0) {
        throw new NotFoundException(`Não há habilidades cadastrados...`);
      }
      return roles;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getRoleById(id: UUID): Promise<Role> {
    try {
      const role = await this.roleRepository.findOne({
        where: { id: id },
      });

      if (!role) throw new NotFoundException('Função não encontrada');

      return role;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateRole(id: UUID, updateRoleDto: UpdateRoleDto) {
    try {
      const checkRole = await this.roleRepository.findOne({
        where: {
          role: updateRoleDto.role,
        },
      });

      if (checkRole) throw new BadRequestException('Função já cadastrada');
      await this.roleRepository.update(id, updateRoleDto);
      return 'Habilidade atualizada.';
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // async deleteRole(id: UUID) {
  //   try {
  //     const role = await this.getRoleById(id);

  //     await this.roleRepository.remove(role);
  //     return 'Habilidade removida.';
  //   } catch (error) {
  //     throw new BadRequestException(error.message);
  //   }
  // }
  async deleteRole(id: UUID) {
    try {
      const role = await this.getRoleById(id);
      await this.userRepository.update({ id: id }, { role: null });

      await this.roleRepository.remove(role);
      return 'Habilidade removida.';
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
