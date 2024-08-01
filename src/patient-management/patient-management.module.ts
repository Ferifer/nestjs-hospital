import { Module } from '@nestjs/common';
import { PatientManagementService } from './patient-management.service';
import { PatientManagementController } from './patient-management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientManagement } from './entities/patient-management.entity';

@Module({
  controllers: [PatientManagementController],
  providers: [PatientManagementService],
  imports: [TypeOrmModule.forFeature([PatientManagement])],
})
export class PatientManagementModule {}
