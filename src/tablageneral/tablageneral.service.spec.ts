import { Test, TestingModule } from '@nestjs/testing';
import { TablageneralService } from './tablageneral.service';

describe('TablageneralService', () => {
  let service: TablageneralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TablageneralService],
    }).compile();

    service = module.get<TablageneralService>(TablageneralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
