import { ApiProperty } from '@nestjs/swagger';


export class resetPasswordPayloadDto{


      @ApiProperty({
        example: 'Senha@123',
        description: 'Senha utilizada para login na plataforma',
      })
      readonly newPassword?: string;    

      @ApiProperty({
       example: "123456",
       description : "codigo enviado para email do usuario!"
      })
      readonly token : string;
}