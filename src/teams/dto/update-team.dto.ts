import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTeamDto } from './create-team.dto';
import { TeamStack } from '../enum/team-stack.enum';
import { User } from 'src/users/entities/user.entity';
import { UUID } from 'crypto';

export class UpdateTeamDto extends PartialType(CreateTeamDto) {
  
  @ApiProperty({
    example: 'FRONTEND',
    description: 'Pilha de tecnologia da equipe',
    enum: TeamStack,
  })
  readonly team_stack?: TeamStack;

  @ApiProperty({
    description: 'Usuário líder da equipe',
    type: () => User,
  })
  readonly lead?: User;


  @ApiProperty({
    example: ['d290f1ee-6c54-4b01-90e6-d701748f0851', 'a123b4cd-5ef6-7890-gh12-ijk34567lmno'],
    description: 'IDs dos membros da equipe',
    type: [String],
  })
  readonly membersId?: UUID[];

  @ApiProperty({
    description: 'Lista de membros da equipe',
    type: () => [User],
  })
  members?: User[];
}