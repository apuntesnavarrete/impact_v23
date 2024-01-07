import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantsModule } from './participants/participants.module';
import { TeamsModule } from './teams/teams.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
//import { CacheModule } from '@nestjs/cache-manager';
//import { redisStore } from 'cache-manager-redis-yet';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';




@Module({
  imports:[

    ConfigModule.forRoot({
      isGlobal: true
    }),
/*
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

*/
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public', // // Ruta al directorio de archivos públicos
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: parseInt(process.env.PORTDB),
      username: 'admin',
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      autoLoadEntities: true, // modificar para produccion
      synchronize: true}),
    ParticipantsModule,
    TeamsModule,
    UsersModule,
    AuthModule,
    CategoriesModule,
     // Agrega esta línea para configurar el módulo de caché

  
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
