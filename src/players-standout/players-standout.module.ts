import { Module } from '@nestjs/common';
import { PlayersStandoutController } from './players-standout.controller';
import { PlayersStandoutService } from './players-standout.service';
import { PlayersStandout } from './players-standout.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([PlayersStandout])
  ],
  controllers: [PlayersStandoutController],
  providers: [PlayersStandoutService]
})
export class PlayersStandoutModule {}
