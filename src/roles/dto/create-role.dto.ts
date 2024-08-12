import { IsNotEmpty } from 'class-validator';
import { EnumRoles } from '../enums/roles-enum.enum';

export class CreateRoleDto {
  @IsNotEmpty()
  role: EnumRoles;
}
