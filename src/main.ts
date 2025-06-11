import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5173','http://localhost:5174', 'http://10.210.20.243:8081', 'http://192.168.0.7:8081'], // Add your new domain here
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilita el intercambio de cookies a través de las solicitudes de dominio cruzado
  });

  app.setGlobalPrefix("api/v1");


  app.useGlobalPipes( new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));


  const config = new DocumentBuilder()
  .setTitle("Impact")
  .setDescription("Routers Football leagues")
  .setVersion("1.0")
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
