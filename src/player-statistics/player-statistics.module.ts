import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playerstatistics } from './player-statistics.entity';
import { PlayersStatisticsService } from './player-statistics.service';
import { PlayersStatisticsController } from './player-statistics.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([Playerstatistics])
  ],
  controllers: [PlayersStatisticsController],
  providers: [PlayersStatisticsService]
})
export class PlayerStatisticsModule {}
