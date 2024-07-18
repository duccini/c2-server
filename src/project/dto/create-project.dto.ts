import { ProjectStatus } from '../enums/project-status.enum';

export class CreateProjectDto {
  readonly title: string;
  readonly description: string;
  readonly status: ProjectStatus;
  readonly lead: string;
  readonly teams: string;
  readonly finished_at: Date;
  readonly created_at: Date;
}
