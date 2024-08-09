import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { UserRoles } from '../enums/user-role.enum';
import { Skill } from 'src/skills/entities/skill.entity';

export class UpdateUserDto {
  username?: string;
  password?: string;
  role?: UserRoles;
  skills?: Skill[];
  github?: string;
  linkedin?: string;
  website?: string;
}
