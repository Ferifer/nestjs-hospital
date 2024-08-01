import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateAppointmentManagementDto {
  @ApiProperty({ description: 'ID of the patient' })
  @IsNotEmpty()
  patientId: number;

  @ApiProperty({ description: 'ID of the staff member' })
  @IsNotEmpty()
  staffId: number;

  @ApiProperty({
    description: 'Date and time of the appointment',
    type: String,
    format: 'date-time',
  })
  @IsDate()
  @IsNotEmpty()
  appointmentDate: Date;

  @ApiProperty({ description: 'Purpose of the visit' })
  @IsString()
  @IsNotEmpty()
  purpose: string;

  @ApiProperty({
    description: 'Status of the appointment',
    default: 'scheduled',
  })
  @IsString()
  @IsNotEmpty()
  status: string;
}
