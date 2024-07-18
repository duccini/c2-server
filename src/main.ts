import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as momentTimezone from 'moment-timezone';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Date.prototype.toJSON = () => {
    return momentTimezone(this)
      .tz('America/Sao_Paulo')
      .format('DD-MM-YYYY HH:mm:ss');
  };

  await app.listen(3000);
}
bootstrap();
