import { Test, TestingModule } from '@nestjs/testing';
import { ProyectoController } from './proyecto.controller';

describe('ProyectoController', () => {
  let controller: ProyectoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProyectoController],
    }).compile();

    controller = module.get<ProyectoController>(ProyectoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
