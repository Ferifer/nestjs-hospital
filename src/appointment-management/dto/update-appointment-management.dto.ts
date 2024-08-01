import { PartialType } from '@nestjs/swagger';
import { CreateAppointmentManagementDto } from './create-appointment-management.dto';

export class UpdateAppointmentManagementDto extends PartialType(CreateAppointmentManagementDto) {}
