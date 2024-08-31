import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';
import { EnumRoles } from '../enums/roles-enum.enum';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @ApiProperty({
    example: 'USER',
    description: 'Papel atualizado',
    enum: EnumRoles,
    required: false,
  })
  role?: EnumRoles;
}
