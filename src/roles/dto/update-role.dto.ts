import { PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';
import { EnumRoles } from '../enums/roles-enum.enum';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  role: EnumRoles;
}
