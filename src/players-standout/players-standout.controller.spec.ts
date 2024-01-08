import { Test, TestingModule } from '@nestjs/testing';
import { PlayersStandoutController } from './players-standout.controller';

describe('PlayersStandoutController', () => {
  let controller: PlayersStandoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersStandoutController],
    }).compile();

    controller = module.get<PlayersStandoutController>(PlayersStandoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
