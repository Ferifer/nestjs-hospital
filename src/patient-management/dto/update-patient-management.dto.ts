import { PartialType } from '@nestjs/swagger';
import { CreatePatientManagementDto } from './create-patient-management.dto';

export class UpdatePatientManagementDto extends PartialType(CreatePatientManagementDto) {}
