import { Test, TestingModule } from '@nestjs/testing';
import { TeamsTournamentController } from './teams-tournament.controller';
import { TeamsTournamentService } from './teams-tournament.service';

describe('TeamsTournamentController', () => {
  let controller: TeamsTournamentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamsTournamentController],
      providers: [TeamsTournamentService],
    }).compile();

    controller = module.get<TeamsTournamentController>(TeamsTournamentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
