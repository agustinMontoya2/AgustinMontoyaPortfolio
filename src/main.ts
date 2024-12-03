import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParse from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'https://agustin-montoya-portfolio.vercel.app',
      'http://localhost:5173',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.use(bodyParse.json());
  await app.listen(3000);
}
bootstrap();
