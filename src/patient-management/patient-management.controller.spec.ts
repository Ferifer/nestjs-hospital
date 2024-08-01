import { Test, TestingModule } from '@nestjs/testing';
import { PatientManagementController } from './patient-management.controller';
import { PatientManagementService } from './patient-management.service';

describe('PatientManagementController', () => {
  let controller: PatientManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientManagementController],
      providers: [PatientManagementService],
    }).compile();

    controller = module.get<PatientManagementController>(PatientManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
