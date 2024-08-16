import { IsNotEmpty } from 'class-validator';
import { EnumStacks } from '../enums/stacks-enum.enum';

export class CreateSkillDto {
  // @IsNotEmpty()
  // stacks: EnumStacks[];

  @IsNotEmpty()
  stack: EnumStacks;
}
