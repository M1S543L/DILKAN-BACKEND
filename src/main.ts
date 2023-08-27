import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({
    origin: 'https://dilkan-de073.web.app/login', // Cambia esto a la URL de tu frontend Angular
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
 
  await app.listen(process.env.PORT ||3000);
}
bootstrap();
