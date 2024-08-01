import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateStaffManagementDto {
  @ApiProperty({ description: 'Full name of the staff member' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ description: 'Email address of the staff member' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Date of birth of the staff member',
    type: String,
    format: 'date',
  })
  @IsDate()
  @IsNotEmpty()
  dateOfBirth: Date;

  @ApiProperty({ description: 'Phone number of the staff member' })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({ description: 'Address of the staff member' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'Start date of employment of the staff member',
    type: String,
    format: 'date',
  })
  @IsDate()
  @IsNotEmpty()
  startDateOfEmployment: Date;
}
