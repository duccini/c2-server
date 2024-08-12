import { ApiProperty } from '@nestjs/swagger';
import { UUID } from 'crypto';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: '',
    description:
      'ID não obrigatório para a criação do usuário, será gerado automaticamente pelo banco de dados.',
  })
  readonly id?: UUID;

  @ApiProperty({
    example: 'João Silva',
    description: 'Nome e sobrenome do usuário da plataforma',
  })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({
    example: 'email@email.com',
    description: 'Email que será utilizado para login pelo usuário',
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: 'Senha@123',
    description: 'Senha utilizada para login na plataforma',
  })
  @IsNotEmpty()
  password: string;
  // @ApiProperty({
  //   example: 'Admin',
  //   description: 'Tipo de usuário, associado a suas funções na plataforma',
  // })
  // readonly role?: UserRoles;

  // @ApiProperty({
  //   example: 'github.com/JoãoSilva',
  //   description: 'Link do github do usuário',
  // })
  // readonly github?: string;

  // @ApiProperty({
  //   example: 'linkedin.com/JoaoSilva',
  //   description: 'Link do perfil do linkedin do usuário',
  // })
  // readonly linkedin?: string;

  // @ApiProperty({
  //   example: 'www.sitedojoaosilva.com',
  //   description: 'Link do site do usuário',
  // })
  // readonly website?: string;

  // constructor(
  //   id: UUID,
  //   email: string,
  //   password: string,
  //   github: string,
  //   linkedin: string,
  //   website: string,
  // ) {
  //   this.id = id;
  //   this.email = email;
  //   this.password = password;
  //   this.github = github;
  //   this.linkedin = linkedin;
  //   this.website = website;
  // }
}
