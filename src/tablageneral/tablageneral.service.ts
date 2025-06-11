import { Injectable } from '@nestjs/common';
import { MatchType } from 'src/common/types/match.type';
import { TablageneralType } from 'src/common/types/tablageneral.type';
import { MatchesService } from 'src/matches/matches.service';

@Injectable()
export class TablageneralService {
  constructor(private readonly matchesService: MatchesService) {}

  async getAll(): Promise<TablageneralType[]> {
    const matches = await this.getMatches();
    return this.buildStandings(matches);
  }

  async getByTorneo(idTorneo: number): Promise<TablageneralType[]> {
    const matches = await this.getMatches();
 const filtrados = matches.filter(
  (match) => Number(match.tournaments?.id) === Number(idTorneo)
);

console.log("Filtered data:");
console.log(filtrados);

    return this.buildStandings(filtrados);
  }

  private async getMatches(): Promise<MatchType[]> {
    return this.matchesService.all();
  }

  private buildStandings(matches: MatchType[]): TablageneralType[] {
    const puntosPorEquipo: { [key: string]: TablageneralType } = {};

    matches.forEach((match) => {
      const local = match.teamHome;
      const visitante = match.teamAway;

      if (!puntosPorEquipo[local.name]) {
        puntosPorEquipo[local.name] = {
          equipoId: local.id,
          equipo: local.name,
          logo: local.logo || 'default.png',
          puntos: 0,
          goles: 0,
          golesRecibidos: 0,
          partidosJugados: 0,
          partidosGanados: 0,
          partidosGanadosDesempate: 0,
          partidosPerdidos: 0,
          partidosPerdidosDesempate: 0,
          partidosEmpatados: 0,
        };
      }

      if (!puntosPorEquipo[visitante.name]) {
        puntosPorEquipo[visitante.name] = {
          equipoId: visitante.id,
          equipo: visitante.name,
          logo: visitante.logo || 'default.png',
          puntos: 0,
          goles: 0,
          golesRecibidos: 0,
          partidosJugados: 0,
          partidosGanados: 0,
          partidosGanadosDesempate: 0,
          partidosPerdidos: 0,
          partidosPerdidosDesempate: 0,
          partidosEmpatados: 0,
        };
      }

      // Local
      const pl = puntosPorEquipo[local.name];
      pl.puntos += match.pointsLocal;
      pl.goles += match.localgoals;
      pl.golesRecibidos += match.visitangoals;
      pl.partidosJugados += 1;

      if (match.pointsLocal === 3) pl.partidosGanados += 1;
      else if (match.pointsLocal === 2) pl.partidosGanadosDesempate += 1;
      else if (match.pointsLocal === 1) pl.partidosPerdidosDesempate += 1;
      else pl.partidosPerdidos += 1;

      // Visitante
      const pv = puntosPorEquipo[visitante.name];
      pv.puntos += match.pointsVisitan;
      pv.goles += match.visitangoals;
      pv.golesRecibidos += match.localgoals;
      pv.partidosJugados += 1;

      if (match.pointsVisitan === 3) pv.partidosGanados += 1;
      else if (match.pointsVisitan === 2) pv.partidosGanadosDesempate += 1;
      else if (match.pointsVisitan === 1) pv.partidosPerdidosDesempate += 1;
      else pv.partidosPerdidos += 1;
    });

    return Object.values(puntosPorEquipo).sort((a, b) => {
      if (b.puntos !== a.puntos) return b.puntos - a.puntos;
      return (b.goles - b.golesRecibidos) - (a.goles - a.golesRecibidos);
    });
  }
}
