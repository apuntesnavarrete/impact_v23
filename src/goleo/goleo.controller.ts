import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GoleoService } from './goleo.service';
import { Playerstatistics } from 'src/player-statistics/player-statistics.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('goleo')
export class GoleoController {
  constructor(
    private readonly goleoService: GoleoService,
    @InjectRepository(Playerstatistics)
    private readonly playerStatsRepo: Repository<Playerstatistics>,
  ) {}

@Get()
async getAllGoleadores() {
  const datos = await this.playerStatsRepo.find({
    relations: ['participants', 'teams', 'matches', 'matches.tournaments'],
  });

  const resultado = this.goleoService.GetSumDataPlayerTotal(datos as any);
  return resultado.sort((a, b) => b.goles - a.goles);
}

@Get('top-asistencias')
async getTopAsistencias() {
  const datos = await this.playerStatsRepo.find({
    relations: ['participants', 'teams', 'matches', 'matches.tournaments'],
  });

  const resultado = this.goleoService.GetSumDataPlayerTotal(datos as any);
  return resultado.sort((a, b) => b.asistencias - a.asistencias);
}

@Get(':idTorneo')
async getGoleadoresByTorneo(@Param('idTorneo', ParseIntPipe) idTorneo: number) {
  const datos = await this.playerStatsRepo.find({
    relations: ['participants', 'teams', 'matches', 'matches.tournaments'],
    where: {
      matches: {
        tournaments: {
          id: idTorneo,
        },
      },
    },
  });

  const resultado = this.goleoService.GetSumDataPlayerWithTeam(datos as any);
  return resultado.sort((a, b) => b.goles - a.goles);
}

@Get('asistencias/:idTorneo')
async getAsistenciasByTorneo(@Param('idTorneo', ParseIntPipe) idTorneo: number) {
  const datos = await this.playerStatsRepo.find({
    relations: ['participants', 'teams', 'matches', 'matches.tournaments'],
    where: {
      matches: {
        tournaments: {
          id: idTorneo,
        },
      },
    },
  });

  const resultado = this.goleoService.GetSumDataPlayerWithTeam(datos as any);
  return resultado.sort((a, b) => b.asistencias - a.asistencias);
}


@Get('goleador-mes/:anio/:mes')
async getGoleadorDelMes(
  @Param('anio', ParseIntPipe) anio: number,
  @Param('mes', ParseIntPipe) mes: number
) {
  const datos = await this.playerStatsRepo.find({
    relations: ['participants', 'teams', 'matches'],
  });

  const resultado = this.goleoService.getdataDelMes(datos as any, mes, anio);
  return resultado
    .sort((a, b) => b.goles - a.goles)
    .slice(0, 20);
}

@Get('asistencias-mes/:anio/:mes')
async getTopAsistenciasDelMes(
  @Param('anio', ParseIntPipe) anio: number,
  @Param('mes', ParseIntPipe) mes: number
) {
  const datos = await this.playerStatsRepo.find({
    relations: ['participants', 'teams', 'matches'],
  });

  const resultado = this.goleoService.getdataDelMes(datos as any, mes, anio);
  return resultado
    .sort((a, b) => b.asistencias - a.asistencias)
    .slice(0, 20);
}

@Get('goleadores-mes/:anio/:mes/liga/:liga')
async getTopGoleadoresDelMesPorLiga(
  @Param('anio', ParseIntPipe) anio: number,
  @Param('mes', ParseIntPipe) mes: number,
  @Param('liga') liga: string
) {
  const datos = await this.playerStatsRepo.find({
    relations: ['participants', 'matches', 'matches.tournaments'],
  });

  const resultado = this.goleoService.getdataDelMesPorLiga(datos as any, mes, anio, liga);
  return resultado
    .sort((a, b) => b.goles - a.goles)
    .slice(0, 20);
}

@Get('asistencias-mes/:anio/:mes/liga/:liga')
async getTopAsistenciasDelMesPorLiga(
  @Param('anio', ParseIntPipe) anio: number,
  @Param('mes', ParseIntPipe) mes: number,
  @Param('liga') liga: string
) {
  const datos = await this.playerStatsRepo.find({
    relations: ['participants', 'matches', 'matches.tournaments'],
  });

  const resultado = this.goleoService.getdataDelMesPorLiga(datos as any, mes, anio, liga);
  return resultado
    .sort((a, b) => b.asistencias - a.asistencias)
    .slice(0, 20);
}

}

