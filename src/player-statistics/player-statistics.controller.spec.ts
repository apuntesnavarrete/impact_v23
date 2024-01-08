import { Test, TestingModule } from '@nestjs/testing';
import { PlayerStatisticsController } from './player-statistics.controller';

describe('PlayerStatisticsController', () => {
  let controller: PlayerStatisticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerStatisticsController],
    }).compile();

    controller = module.get<PlayerStatisticsController>(PlayerStatisticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
