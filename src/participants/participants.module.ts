import { Module } from '@nestjs/common';
import { ParticipantsController } from './participants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participants } from './participants.entity';
import { ParticipantsService } from './participants.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Participants])
  ],
  controllers: [ParticipantsController],
  providers: [ParticipantsService]
})
export class ParticipantsModule {}
