import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { TeamStack } from '../enum/team-stack.enum';
import { UUID } from 'crypto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @IsNotEmpty()
  @IsArray()
  @IsUUID()

  @ApiProperty({
  example: ["d290f1ee-6c54-4b01-90e6-d701748f0851","d290f1ee-6c54-4b01-90e6-d701748f0852","d290f1ee-6c54-4b01-90e6-d701748f0853"],
  description: "Id dos membros da equipe"

  })
  membersId: UUID[];

  @IsNotEmpty()
  @ApiProperty({
    example: ["d290f1ee-6c54-4b01-90e6-d701748f0851"],
    description: "Id do lider da equipe"
  
    })
  leadId: UUID;
  
  @ApiProperty({
    example: {
      username: "Guilherme",
      email: "teste@gmail.com,"
    },
    description: "Dados do lider da equipe"
  
    })
  lead: User;

  @ApiProperty({
    example:[{username: "Jefferson Nunes",
      email: "teste@gmail.com,"},{username: "Tulio",
        email: "teste1@gmail.com,"},
      {username: "Guilherme",
        email: "teste3@gmail.com,"}],
    description: "Dados dos membros da equipe"
  
    })
  members: User[];

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: "BACKEND",
    description: "Stack da equipe"
  })
  readonly team_stack: TeamStack;
}





