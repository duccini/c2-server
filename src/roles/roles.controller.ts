import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { UUID } from 'crypto';

@Controller('skills')
export class SkillsController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  createSkill(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.createRole(createRoleDto);
  }

  @Get()
  getAllSkills() {
    return this.rolesService.getAllRoles();
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.rolesService.getRoleById(id);
  }

  @Patch(':id')
  updateSkill(@Param('id') id: UUID, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.updateRole(id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.rolesService.deleteRole(id);
  }
}
