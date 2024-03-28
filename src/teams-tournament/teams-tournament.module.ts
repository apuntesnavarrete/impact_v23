import { Module } from '@nestjs/common';
import { TeamsTournamentService } from './teams-tournament.service';
import { TeamsTournamentController } from './teams-tournament.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsTournament } from './entities/teams-tournament.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([TeamsTournament])
  ],
  controllers: [TeamsTournamentController],
  providers: [TeamsTournamentService],
})
export class TeamsTournamentModule {}
