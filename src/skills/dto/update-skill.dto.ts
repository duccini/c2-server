import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateSkillDto } from './create-skill.dto';
import { EnumStacks } from '../enums/stacks-enum.enum';

export class UpdateSkillDto extends PartialType(CreateSkillDto) {
  @ApiProperty({
    example: ['FRONTEND', 'BACKEND'],
    description: 'Stacks atualizadas da habilidade',
    enum: EnumStacks,
    required: false,
  })
  stacks?: EnumStacks[];
}
