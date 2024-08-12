import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { UUID } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}
  async createRole(createRoleDto: CreateRoleDto) {
    try {
      // const checkStack = await this.roleRepository.findOne({
      //   where: {
      //     stack: createRoleDto.stack,
      //   },
      // });

      // if (checkStack) throw new BadRequestException('Stack já cadastrada');
      return await this.roleRepository.save(createRoleDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  getAllRoles() {
    return `This action returns all roles`;
  }

  getRoleById(id: UUID) {
    return `This action returns a #${id} role`;
  }

  updateRole(id: UUID, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  deleteRole(id: UUID) {
    return `This action removes a #${id} role`;
  }
}
