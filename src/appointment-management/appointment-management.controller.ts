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
import { AppointmentManagementService } from './appointment-management.service';
import { CreateAppointmentManagementDto } from './dto/create-appointment-management.dto';
import { UpdateAppointmentManagementDto } from './dto/update-appointment-management.dto';
import { AppointmentManagement } from './entities/appointment-management.entity';

@ApiTags('appointment-management')
@Controller('appointment-management')
export class AppointmentManagementController {
  constructor(
    private readonly appointmentManagementService: AppointmentManagementService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Schedule a new appointment' })
  @ApiResponse({
    status: 201,
    description: 'The appointment has been successfully scheduled.',
    type: AppointmentManagement,
  })
  create(
    @Body() createAppointmentManagementDto: CreateAppointmentManagementDto,
  ): Promise<AppointmentManagement> {
    return this.appointmentManagementService.create(
      createAppointmentManagementDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of all appointments' })
  @ApiResponse({
    status: 200,
    description: 'List of appointments',
    type: [AppointmentManagement],
  })
  findAll(
    @Query('keyword') keyword?: string,
  ): Promise<AppointmentManagement[]> {
    return this.appointmentManagementService.findAll(keyword);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get details of a single appointment' })
  @ApiResponse({
    status: 200,
    description: 'Details of the appointment',
    type: AppointmentManagement,
  })
  findOne(@Param('id') id: string): Promise<AppointmentManagement> {
    return this.appointmentManagementService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update details of an appointment' })
  @ApiResponse({
    status: 200,
    description: 'The appointment details have been successfully updated.',
  })
  update(
    @Param('id') id: number,
    @Body() updateAppointmentManagementDto: UpdateAppointmentManagementDto,
  ): Promise<void> {
    return this.appointmentManagementService.update(
      id,
      updateAppointmentManagementDto,
    );
  }
}
