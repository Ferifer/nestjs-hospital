import { Test, TestingModule } from '@nestjs/testing';
import { PatientManagementService } from './patient-management.service';

describe('PatientManagementService', () => {
  let service: PatientManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientManagementService],
    }).compile();

    service = module.get<PatientManagementService>(PatientManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
