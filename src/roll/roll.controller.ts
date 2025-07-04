// roll.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { RollService } from './roll.service';
import { MatchesService } from '../matches/matches.service';
import { TeamsTournamentService } from '../teams-tournament/teams-tournament.service';

@Controller('roll')
export class RollController {
  constructor(
    private readonly rollService: RollService,
    private readonly matchesService: MatchesService,
    private readonly teamsTournamentService: TeamsTournamentService
  ) {}

  @Get(':idtorneo')
  async getRoll(@Param('idtorneo') idtorneo: string) {
    const tournamentId = parseInt(idtorneo);

    const juegos = await this.matchesService.findByTournamentId(tournamentId);
    const equiposTorneo = await this.teamsTournamentService.findByTournamentId(tournamentId);

    return this.rollService.buildMatchRoll(juegos, equiposTorneo);
  }
}
