// roll.module.ts
import { Module } from '@nestjs/common';
import { RollController } from './roll.controller';
import { RollService } from './roll.service';
import { MatchesModule } from '../matches/matches.module';
import { TeamsTournamentModule } from '../teams-tournament/teams-tournament.module';

@Module({
  imports: [MatchesModule, TeamsTournamentModule], // ✅ importa módulos que exportan los servicios
  controllers: [RollController],
  providers: [RollService],
})
export class RollModule {}
