import { Test, TestingModule } from '@nestjs/testing';
import { ChampionsPlayersController } from './champions-players.controller';

describe('ChampionsPlayersController', () => {
  let controller: ChampionsPlayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChampionsPlayersController],
    }).compile();

    controller = module.get<ChampionsPlayersController>(ChampionsPlayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
