import { Module } from '@nestjs/common';
import { TablageneralService } from './tablageneral.service';
import { TablageneralController } from './tablageneral.controller';
import { MatchesModule } from 'src/matches/matches.module';

@Module({
  imports: [MatchesModule], // 👈 importante

  controllers: [TablageneralController],
  providers: [TablageneralService],
})
export class TablageneralModule {}

