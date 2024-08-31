import { ApiProperty } from '@nestjs/swagger';
import { UUID } from 'crypto';

export class RequestPayloadDto{

    @ApiProperty({
        example: 'email@email.com',
        description: 'Email que será utilizado para login pelo usuário',
      })
      readonly email: string;

    }