import { Test, TestingModule } from '@nestjs/testing';
import { ProyectoService } from './proyecto.service';

describe('ProyectoService', () => {
  let service: ProyectoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProyectoService],
    }).compile();

    service = module.get<ProyectoService>(ProyectoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
