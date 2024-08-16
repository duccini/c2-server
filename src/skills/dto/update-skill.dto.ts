import { PartialType } from '@nestjs/swagger';
import { CreateSkillDto } from './create-skill.dto';
import { EnumStacks } from '../enums/stacks-enum.enum';

export class UpdateSkillDto extends PartialType(CreateSkillDto) {
  stacks?: EnumStacks[];
}
