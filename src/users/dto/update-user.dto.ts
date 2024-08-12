import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { Skill } from 'src/skills/entities/skill.entity';
import { UUID } from 'crypto';
import { UserRoles } from 'src/roles/enums/roles-enum.enum';

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
