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

  return this.goleoService.GetSumDataPlayerTotal(datos as any);
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

  return this.goleoService.GetSumDataPlayerWithTeam(datos as any);
}


@Get('goleador-mes/:anio/:mes')
async getGoleadorDelMes(
  @Param('anio', ParseIntPipe) anio: number,
  @Param('mes', ParseIntPipe) mes: number
) {
  const datos = await this.playerStatsRepo.find({
    relations: ['participants', 'teams', 'matches'],
  });

  return this.goleoService.getGoleadorDelMes(datos as any, mes, anio);
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

  return this.goleoService.getTopGoleadoresDelMesPorLiga(datos as any, mes, anio, liga);
}


}

