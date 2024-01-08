import { Test, TestingModule } from '@nestjs/testing';
import { ChampionsTeamsController } from './champions-teams.controller';

describe('ChampionsTeamsController', () => {
  let controller: ChampionsTeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChampionsTeamsController],
    }).compile();

    controller = module.get<ChampionsTeamsController>(ChampionsTeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
