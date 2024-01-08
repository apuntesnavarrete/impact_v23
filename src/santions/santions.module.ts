import { Module } from '@nestjs/common';
import { SantionsController } from './santions.controller';
import { SantionsService } from './santions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Santions } from './santions.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Santions])
  ],
  controllers: [SantionsController],
  providers: [SantionsService]
})
export class SantionsModule {}
