import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EnumRoles } from '../enums/roles-enum.enum';

export class CreateRoleDto {
  @ApiProperty({
    example: 'ADMIN',
    description: 'Nome do papel',
    enum: EnumRoles,
  })
  @IsNotEmpty()
  role: EnumRoles;
}
