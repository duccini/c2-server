import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDTO {
  @ApiProperty({
    example: 'Implement Authentication',
    description: 'Título da tarefa',
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Implementar autenticação de usuários usando JWT.',
    description: 'Descrição da tarefa',
  })
  @IsNotEmpty()
  description: string;
}
