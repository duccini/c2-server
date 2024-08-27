import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../task-status.enum';

export class GetTasksFilterDTO {
  @ApiProperty({
    example: 'IN_PROGRESS',
    description: 'Filtrar por status da tarefa',
    enum: TaskStatus,
    required: false,
  })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @ApiProperty({
    example: 'auth',
    description: 'Filtrar tarefas por busca textual',
    required: false,
  })
  @IsOptional()
  @IsString()
  search?: string;
}
