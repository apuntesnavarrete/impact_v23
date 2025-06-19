import { Test, TestingModule } from '@nestjs/testing';
import { GoleoService } from './goleo.service';

describe('GoleoService', () => {
  let service: GoleoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoleoService],
    }).compile();

    service = module.get<GoleoService>(GoleoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
