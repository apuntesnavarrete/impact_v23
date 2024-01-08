import { Module } from '@nestjs/common';
import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matches } from './matches.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Matches])
  ],
  controllers: [MatchesController],
  providers: [MatchesService]
})
export class MatchesModule {}
