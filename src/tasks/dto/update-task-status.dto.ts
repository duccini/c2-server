import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../task-status.enum';

export class UpdateTaskStatusDTO {
  @ApiProperty({
    example: 'COMPLETED',
    description: 'Status atualizado da tarefa',
    enum: TaskStatus,
  })
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
