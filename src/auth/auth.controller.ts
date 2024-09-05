import { Controller, Post, Body, HttpException, HttpStatus, NotFoundException, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth.dto';
import { UsersService } from 'src/users/users.service';
import { ApiTags } from '@nestjs/swagger';
import { RequestPayloadDto } from './dto/request.dto';
import { ResetPasswordPayloadDto } from './dto/resetPassword.dto';

@ApiTags('users')
@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService, 
    private usersService: UsersService
  ) {}

  // Rota de login
  @Post('login')
  async login(@Body() { email, password }: AuthPayloadDto) {
    try {
      const result = await this.authService.validateUser(email, password);
      return result;  // retorna token e informações do usuário
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  // Rota para enviar e-mail de reset de senha
  @Post('request-password-reset')
  async requestPasswordReset(@Body() { email }: RequestPayloadDto) {
    try {
      const user = await this.usersService.findByEmail(email);

      if (!user) {
        throw new NotFoundException('Usuário não encontrado');
      }

      const token = await this.authService.genarationPasswordResetToken(user);
      await this.authService.sendPasswordResetEmail(user, token);

      return { message: "E-mail de redefinição de senha enviado" };
    } catch (error) {
      console.error("Erro ao enviar e-mail de redefinição de senha:", error);
      throw new HttpException('Erro ao processar a solicitação de redefinição de senha.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('validate-reset-token')
async validateResetToken(@Body() { token }: ResetPasswordPayloadDto) {
  const user = await this.usersService.findByResetToken(token);
  
  if (!user || user.resetTokenExpires < new Date()) {
    throw new BadRequestException('Token inválido ou expirado');
  }
  
  // O token está correto, envia um OK ao frontend
  return { message: 'Token válido', success: true };
}

@Post('reset-password')
async resetPassword(@Body() { token, password }: ResetPasswordPayloadDto) {
  const user = await this.usersService.findByResetToken(token);

  if (!user || user.resetTokenExpires < new Date()) {
    throw new BadRequestException('Token inválido ou expirado');
  }

  const passwordHash = await this.usersService.hashPassword(password);
  user.password = passwordHash;

  // Limpa o token e salva a nova senha
  user.resetToken = null;
  user.resetTokenExpires = null;

  await this.usersService.save(user);
  return { message: 'Senha redefinida com sucesso' };
}
}
