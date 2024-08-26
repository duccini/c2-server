import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  async validateUser(email: string, password: string): Promise<{ token: string, user?: User } | null> {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Senha Incorreta!');
    }

    // Se o usuário for válido, gera o token
    return this.generateJwtToken(user.email, user); // Passa também o usuário
  }

  public generateJwtToken(email: string, user: User): { token: string, user: User } {
    const payload = { email: email,secret: process.env.JWT_SECRET}; // Apenas o necessário
    
    const token =  this.jwtService.sign(payload);
    return { token, user }; // Retorna o token
  }



  async genarationPasswordResetToken (user : User) : Promise<string>{

    const resetToken = Math.floor(100000 + Math.random() * 900000).toString();
     
   //EXPIRAÇÃO DO CODIGO 1H
   const resetTokenExpires = new Date(Date.now() + 3600000)


   user.resetToken = resetToken;
   user.resetTokenExpires = resetTokenExpires;
  
   //SALVANDO 
   await this.usersService.save(user);



    return resetToken;

  }

  async sendPasswordResetEmail(user: User, token: string) {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Seu e-mail
        pass: process.env.EMAIL_PASS, // Sua senha de app
      },
      tls: {
        rejectUnauthorized: false, // Isso ignora certificados autoassinados
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Redefinição de Senha Comunidade Codigo Certo Coders',
      text: `Você solicitou a redefinição de senha da sua conta na Comunidade Codigo Certo Coders. Use o seguinte token para redefinir sua senha: "${token}". 
            Esse token expira em 1 hora.`,
    };

    await transporter.sendMail(mailOptions);
  }

};
