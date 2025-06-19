import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoleoService } from './goleo.service';
import { GoleoController } from './goleo.controller';
import { Playerstatistics } from 'src/player-statistics/player-statistics.entity';
import { PlayerStatisticsModule } from 'src/player-statistics/player-statistics.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Playerstatistics]),
    PlayerStatisticsModule, // 👈 importa el módulo que exporta el repo
  ],
  controllers: [GoleoController],
  providers: [GoleoService],
})
export class GoleoModule {}