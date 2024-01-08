import { Module } from '@nestjs/common';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournaments } from './tournaments.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Tournaments])
  ],
  controllers: [TournamentsController],
  providers: [TournamentsService]
})
export class TournamentsModule {}
