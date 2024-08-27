import { Controller, Post, Body, HttpException, HttpStatus, NotFoundException, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth.dto';
import { UsersService } from 'src/users/users.service';
import { ApiTags } from '@nestjs/swagger';
import { RequestPayloadDto } from './dto/request.dto';
import { resetPasswordPayloadDto } from './dto/resetPasswrod.dto';

@ApiTags('users')
@Controller('auth')
export class AuthController {
  
  constructor(private authService: AuthService, private usersService: UsersService

  ) {}

  //ROTA DE LOGIN
  @Post('login')
  async login(@Body() { email, password }: AuthPayloadDto) {

    try {

        const result = await this.authService.validateUser(email,password);

        return result; // objeto contendo o token e informações do usuário

    } catch (error) {

       throw new HttpException(error.message, HttpStatus.UNAUTHORIZED); //  erros
    }
  }


  //ROTA PARA ENVIAR EMAIL DE RESET DE SENHA
  @Post('request-password-reset')

  async requestPasswordReset(@Body() {email}: RequestPayloadDto){

   try {
    const user = await this.usersService.findByEmail(email);

    if(!user){
      throw new NotFoundException('Usuário não encontrado');
    }

    const token = await this.authService.genarationPasswordResetToken(user);
    await this.authService.sendPasswordResetEmail(user,token)

    return {message: "E-mail de redefinição de senha enviado"}
    
   } catch (error) {
    console.log(error)    
   }
  }  


  //ROTA DE RESETAR SENHA 
  @Post('reset-password')
  async resetPassword(
     @Body() {token,newPassword}: resetPasswordPayloadDto
) {
  const user = await this.usersService.findByResetToken(token);
  if (!user || user.resetTokenExpires < new Date()) {
    throw new BadRequestException('Token inválido ou expirado');
  }

  
  const passwordHash = await this.usersService.hashPassword(newPassword);
  user.password = passwordHash;

  //RESENTANDO DADOS DO REQUEST DE NOVA SENHA
  user.resetToken = null;
  user.resetTokenExpires = null;
 
 
  //SALVANDO NOVA SENHA 
  await this.usersService.save(user);

  return { message: 'Senha redefinida com sucesso' };
}
}
