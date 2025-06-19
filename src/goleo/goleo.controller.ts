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
}

