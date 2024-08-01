import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePatientManagementDto } from './dto/create-patient-management.dto';
import { UpdatePatientManagementDto } from './dto/update-patient-management.dto';
import { PatientManagement } from './entities/patient-management.entity';
import { PatientManagementService } from './patient-management.service';

@ApiTags('patient-management')
@Controller('patient-management')
export class PatientManagementController {
  constructor(
    private readonly patientManagementService: PatientManagementService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new patient' })
  @ApiResponse({
    status: 201,
    description: 'The patient has been successfully created.',
    type: PatientManagement,
  })
  create(
    @Body() createPatientManagementDto: CreatePatientManagementDto,
  ): Promise<PatientManagement> {
    return this.patientManagementService.create(createPatientManagementDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of all patients' })
  @ApiResponse({
    status: 200,
    description: 'List of patients',
    type: [PatientManagement],
  })
  findAll(@Query('keyword') keyword?: string): Promise<PatientManagement[]> {
    return this.patientManagementService.findAll(keyword);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get details of a single patient' })
  @ApiResponse({
    status: 200,
    description: 'Details of the patient',
    type: PatientManagement,
  })
  findOne(@Param('id') id: string): Promise<PatientManagement> {
    return this.patientManagementService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update details of a patient' })
  @ApiResponse({
    status: 200,
    description: 'The patient details have been successfully updated.',
  })
  update(
    @Param('id') id: string,
    @Body() updatePatientManagementDto: UpdatePatientManagementDto,
  ): Promise<void> {
    return this.patientManagementService.update(id, updatePatientManagementDto);
  }

  @Patch(':id/deactivate')
  @ApiOperation({ summary: 'Mark a patient as inactive' })
  @ApiResponse({
    status: 200,
    description: 'The patient has been successfully marked as inactive.',
  })
  deactivate(@Param('id') id: string): Promise<void> {
    return this.patientManagementService.deactivate(id);
  }
}
