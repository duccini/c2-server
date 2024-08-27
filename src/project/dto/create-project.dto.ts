import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProjectStatus } from '../enums/project-status.enum';
import { User } from 'src/users/entities/user.entity';
import { UUID } from 'crypto';
import { Team } from 'src/teams/entities/team.entity';

export class CreateProjectDto {
  @ApiProperty({
    example: 'Project Alpha',
    description: 'Título do projeto',
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({
    example: 'Descrição detalhada do projeto.',
    description: 'Descrição do projeto',
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty({
    example: 'https://example.com/photo.jpg',
    description: 'URL da foto do projeto',
  })
  urlPhoto: string;

  @ApiProperty({
    example: 'IN_PROGRESS',
    description: 'Status do projeto',
    enum: ProjectStatus,
  })
  @IsNotEmpty()
  @IsString()
  readonly status: ProjectStatus;

  @ApiProperty({
    example: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    description: 'ID do líder do projeto',
  })
  @IsNotEmpty()
  @IsUUID()
  leadId: UUID; //User

  @ApiProperty({
    description: 'Líder do projeto',
    type: () => User,
  })
  lead: User;

  @ApiProperty({
    example: ['d290f1ee-6c54-4b01-90e6-d701748f0851', 'a123b4cd-5ef6-7890-gh12-ijk34567lmno'],
    description: 'IDs das equipes do projeto',
    type: [String],
  })
  @IsArray()
  teamsId: UUID[]; //Teams[]

  @ApiProperty({
    description: 'Equipes do projeto',
    type: () => [Team],
  })
  teams: Team[];

  @ApiProperty({
    example: '2023-12-31T23:59:59Z',
    description: 'Data de conclusão do projeto',
  })
  @IsNotEmpty()
  @IsDateString()
  readonly finishedAt: Date;

  @ApiProperty({
    example: '2023-01-01T00:00:00Z',
    description: 'Data de criação do projeto',
  })
  @IsDateString()
  @IsNotEmpty()
  readonly createdAt: Date;
}
