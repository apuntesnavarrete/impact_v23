import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leagues } from './leagues.entity';
import { LeagueService } from './leagues.service';
import { LeagueController } from './leagues.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([Leagues])
  ],
  controllers: [LeagueController],
  providers: [LeagueService]
})
export class LeaguesModule {}
