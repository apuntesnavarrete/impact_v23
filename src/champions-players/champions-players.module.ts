import { Module } from '@nestjs/common';
import { ChampionsPlayersController } from './champions-players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChampionsPlayers } from './champions-players.entity';
import { ChampionsPlayersService } from './champions-players.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([ChampionsPlayers])
  ],
  controllers: [ChampionsPlayersController],
  providers: [ChampionsPlayersService]
})
export class ChampionsPlayersModule {}
