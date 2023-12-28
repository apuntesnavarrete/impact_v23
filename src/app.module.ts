import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantsModule } from './participants/participants.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'toor',
      database: 'impac_jugadores',
      autoLoadEntities: true, // modificar para produccion
      synchronize: true}),
    ParticipantsModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
