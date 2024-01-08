import { Test, TestingModule } from '@nestjs/testing';
import { ChampionsPlayersService } from './champions-players.service';

describe('ChampionsPlayersService', () => {
  let service: ChampionsPlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChampionsPlayersService],
    }).compile();

    service = module.get<ChampionsPlayersService>(ChampionsPlayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
