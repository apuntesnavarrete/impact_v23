// roll.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class RollService {
  buildMatchRoll(games: any[], tournamentTeams: any[]) {
    const teamNames = tournamentTeams.map(t => t.teams.name);
    const result: Record<string, Record<string, { count: number; lastDate: string | null }>> = {};

    for (const teamA of teamNames) {
      result[teamA] = {};
      for (const teamB of teamNames) {
        if (teamA !== teamB) {
          result[teamA][teamB] = { count: 0, lastDate: null };
        }
      }
    }

    for (const game of games) {
      const home = game.teamHome.name;
      const away = game.teamAway.name;
      const date = game.date;

      if (result[home]?.[away]) {
        result[home][away].count += 1;
        result[home][away].lastDate = date > (result[home][away].lastDate || "") ? date : result[home][away].lastDate;
      }

      if (result[away]?.[home]) {
        result[away][home].count += 1;
        result[away][home].lastDate = date > (result[away][home].lastDate || "") ? date : result[away][home].lastDate;
      }
    }

    return result;
  }
}
