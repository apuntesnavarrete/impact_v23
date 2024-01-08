import { Module } from '@nestjs/common';
import { ChampionsTeamsService } from './champions-teams.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChampionsTeams } from './champions-teams.entity';
import { ChampionsTeamsController } from './champions-teams.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([ChampionsTeams])
  ],
  controllers: [ChampionsTeamsController],
  providers: [ChampionsTeamsService]
})
export class ChampionsTeamsModule {}
