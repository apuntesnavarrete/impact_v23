import { Module } from '@nestjs/common';
import { RostersController } from './rosters.controller';
import { RostersService } from './rosters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rosters } from './rosters.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Rosters])
  ],
  controllers: [RostersController],
  providers: [RostersService]
})
export class RostersModule {}
