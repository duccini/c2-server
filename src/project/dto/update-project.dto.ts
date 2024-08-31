import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';
import { ProjectStatus } from '../enums/project-status.enum';
import { User } from 'src/users/entities/user.entity';
import { Team } from 'src/teams/entities/team.entity';
import { UUID } from 'crypto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @ApiProperty({
    example: 'Project Alpha Updated',
    description: 'Título atualizado do projeto',
    required: false,
  })
  readonly title?: string;

  @ApiProperty({
    example: 'Descrição atualizada do projeto.',
    description: 'Descrição atualizada do projeto',
    required: false,
  })
  readonly description?: string;

  @ApiProperty({
    example: 'https://example.com/updated-photo.jpg',
    description: 'URL atualizada da foto do projeto',
    required: false,
  })
  urlPhoto?: string;

  @ApiProperty({
    example: 'COMPLETED',
    description: 'Status atualizado do projeto',
    enum: ProjectStatus,
    required: false,
  })
  readonly status?: ProjectStatus;

  @ApiProperty({
    description: 'Líder atualizado do projeto',
    type: () => User,
    required: false,
  })
  readonly lead?: User;

  @ApiProperty({
    example: ['e3587b32-07e2-4f8b-b9c7-4a2f1b9bb6f1'],
    description: 'IDs atualizados das equipes do projeto',
    type: [String],
    required: false,
  })
  readonly teamsId?: UUID[];

  @ApiProperty({
    description: 'Equipes atualizadas do projeto',
    type: () => [Team],
    required: false,
  })
  teams?: Team[];

  @ApiProperty({
    example: '2024-12-31T23:59:59Z',
    description: 'Data atualizada de conclusão do projeto',
    required: false,
  })
  readonly finished_at?: Date;
}
