import { Test, TestingModule } from '@nestjs/testing';
import { GoleoController } from './goleo.controller';

describe('GoleoController', () => {
  let controller: GoleoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoleoController],
    }).compile();

    controller = module.get<GoleoController>(GoleoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
