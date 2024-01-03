import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantsModule } from './participants/participants.module';
import { TeamsModule } from './teams/teams.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';




@Module({
  imports:[
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          socket: {
            host: 'localhost',
            port: 6379,
          },
        }),
      }),
 

    
    }),
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
    TeamsModule,
    UsersModule,
    AuthModule,
     // Agrega esta línea para configurar el módulo de caché

  
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
