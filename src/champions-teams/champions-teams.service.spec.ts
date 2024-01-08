import { Test, TestingModule } from '@nestjs/testing';
import { ChampionsTeamsService } from './champions-teams.service';

describe('ChampionsTeamsService', () => {
  let service: ChampionsTeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChampionsTeamsService],
    }).compile();

    service = module.get<ChampionsTeamsService>(ChampionsTeamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
