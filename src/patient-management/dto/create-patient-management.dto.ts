import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePatientManagementDto {
  @ApiProperty({ description: 'Full name of the patient' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    description: 'Date of birth of the patient',
    type: String,
    format: 'date',
  })
  @IsDate()
  @IsNotEmpty()
  dateOfBirth: Date;

  @ApiProperty({ description: 'Email address of the patient' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Phone number of the patient' })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({ description: 'Address of the patient' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ description: 'Medical history summary of the patient' })
  @IsString()
  @IsNotEmpty()
  medicalHistorySummary: string;
}
