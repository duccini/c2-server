import { ApiProperty } from '@nestjs/swagger';


export class ResetPasswordPayloadDto{


      @ApiProperty({
        example: 'Senha@123',
        description: 'Senha utilizada para login na plataforma',
      })
      readonly password?: string;    

      @ApiProperty({
       example: "123456",
       description : "codigo enviado para email do usuario!"
      })
      readonly token : string;
}