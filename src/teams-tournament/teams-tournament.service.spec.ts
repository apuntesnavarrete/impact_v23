import { Test, TestingModule } from '@nestjs/testing';
import { TeamsTournamentService } from './teams-tournament.service';

describe('TeamsTournamentService', () => {
  let service: TeamsTournamentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamsTournamentService],
    }).compile();

    service = module.get<TeamsTournamentService>(TeamsTournamentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
