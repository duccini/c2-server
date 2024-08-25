import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { UserRoles } from '../enums/user-role.enum';
import { Skill } from 'src/skills/entities/skill.entity';
import { UUID } from 'crypto';
import { Role } from 'src/roles/entities/role.entity';

export class UpdateUserDto {
  username?: string;
  password?: string;
  email?: string;


  role?: Role;
  roleId?: UUID;
  skill?: Skill;
  skillId?: UUID;

  github?: string;
  linkedin?: string;
  website?: string;
  urlPhoto?: string;
}
