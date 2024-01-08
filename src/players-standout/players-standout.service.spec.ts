import { Test, TestingModule } from '@nestjs/testing';
import { PlayersStandoutService } from './players-standout.service';

describe('PlayersStandoutService', () => {
  let service: PlayersStandoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayersStandoutService],
    }).compile();

    service = module.get<PlayersStandoutService>(PlayersStandoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
