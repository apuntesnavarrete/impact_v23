import { Test, TestingModule } from '@nestjs/testing';
import { TablageneralController } from './tablageneral.controller';
import { TablageneralService } from './tablageneral.service';

describe('TablageneralController', () => {
  let controller: TablageneralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TablageneralController],
      providers: [TablageneralService],
    }).compile();

    controller = module.get<TablageneralController>(TablageneralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
