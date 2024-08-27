import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { UserRoles } from '../enums/user-role.enum';
import { Skill } from 'src/skills/entities/skill.entity';
import { UUID } from 'crypto';
import { Role } from 'src/roles/entities/role.entity';

export class UpdateUserDto {


  @ApiProperty({
    example: 'Jefferson Nunes',
    description: 'Nome do Usuário',
  })
  username?: string;

  @ApiProperty({
    example: 'securePassword123!',
    description: 'Senha do Usuário',
  })
  password?: string;

  @ApiProperty({
    example: 'jefferson@example.com',
    description: 'Email do Usuário',
  })
  email?: string;

  @ApiProperty({
    example: 'ADMIN',
    description: 'Papel ou função do Usuário',
   
  })
  role?: Role;

  @ApiProperty({
    example: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    description: 'ID do Papel ou função do Usuário',
  })
  roleId?: UUID;

  @ApiProperty({
    example: 'Frontend Developer',
    description: 'Habilidade ou competência do Usuário',
  })
  skill?: Skill;

  @ApiProperty({
    example: 'e3587b32-07e2-4f8b-b9c7-4a2f1b9bb6f1',
    description: 'ID da Habilidade ou competência do Usuário',
  })
  skillId?: UUID;

  @ApiProperty({
    example: 'https://github.com/jeffersonnunes',
    description: 'Perfil do GitHub do Usuário',
  })
  github?: string;

  @ApiProperty({
    example: 'https://linkedin.com/in/jeffersonnunes',
    description: 'Perfil do LinkedIn do Usuário',
  })
  linkedin?: string;

  @ApiProperty({
    example: 'https://jeffersonnunes.com',
    description: 'Website pessoal do Usuário',
  })
  website?: string;

  @ApiProperty({
    example: 'https://jeffersonnunes.com/photo.jpg',
    description: 'URL da foto do Usuário',
  })
  urlPhoto?: string;
}