import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { UserRoles } from '../enums/user-role.enum';
import { Skill } from 'src/skills/entities/skill.entity';
import { UUID } from 'crypto';

export class UpdateUserDto {
  username?: string;
  password?: string;
  role?: UserRoles;
  skill?: Skill;
  skillId?: UUID;

  github?: string;
  linkedin?: string;
  website?: string;
}
