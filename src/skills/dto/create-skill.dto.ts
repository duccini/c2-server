import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EnumStacks } from '../enums/stacks-enum.enum';

export class CreateSkillDto {
  @ApiProperty({
    example: 'FRONTEND',
    description: 'Stack da habilidade',
    enum: EnumStacks,
  })
  @IsNotEmpty()
  stack: EnumStacks;
}
