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
import { LeaguesModule } from './leagues/leagues.module';
import { TournamentsModule } from './tournaments/tournaments.module';
import { MatchesModule } from './matches/matches.module';
import { PlayerStatisticsModule } from './player-statistics/player-statistics.module';
import { RostersModule } from './rosters/rosters.module';
import { SantionsModule } from './santions/santions.module';
import { ChampionsPlayersModule } from './champions-players/champions-players.module';
import { PlayersStandoutModule } from './players-standout/players-standout.module';
import { ChampionsTeamsModule } from './champions-teams/champions-teams.module';
import { TeamsTournamentModule } from './teams-tournament/teams-tournament.module';




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
      rootPath: join(__dirname, '..', '..', 'public'),
      serveRoot: '/public', // Ruta desde la que se servirán los archivos públicos
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: parseInt(process.env.PORTDB),
      username: 'root',
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      autoLoadEntities: true, // modificar para produccion
      synchronize: true}),
    ParticipantsModule,
    TeamsModule,
    UsersModule,
    AuthModule,
    CategoriesModule,
    LeaguesModule,
    TournamentsModule,
    MatchesModule,
    PlayerStatisticsModule,
    RostersModule,
    SantionsModule,
    ChampionsTeamsModule,
    ChampionsPlayersModule,
    PlayersStandoutModule,
    TeamsTournamentModule,
     // Agrega esta línea para configurar el módulo de caché

  
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
