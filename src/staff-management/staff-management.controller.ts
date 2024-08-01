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
import { CreateStaffManagementDto } from './dto/create-staff-management.dto';
import { UpdateStaffManagementDto } from './dto/update-staff-management.dto';
import { StaffManagement } from './entities/staff-management.entity';
import { StaffManagementService } from './staff-management.service';

@ApiTags('staff-management')
@Controller('staff-management')
export class StaffManagementController {
  constructor(
    private readonly staffManagementService: StaffManagementService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new staff member' })
  @ApiResponse({
    status: 201,
    description: 'The staff member has been successfully created.',
    type: StaffManagement,
  })
  create(
    @Body() createStaffManagementDto: CreateStaffManagementDto,
  ): Promise<StaffManagement> {
    return this.staffManagementService.create(createStaffManagementDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of all staff members' })
  @ApiResponse({
    status: 200,
    description: 'List of staff members',
    type: [StaffManagement],
  })
  findAll(@Query('keyword') keyword?: string): Promise<StaffManagement[]> {
    return this.staffManagementService.findAll(keyword);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get details of a single staff member' })
  @ApiResponse({
    status: 200,
    description: 'Details of the staff member',
    type: StaffManagement,
  })
  findOne(@Param('id') id: string): Promise<StaffManagement> {
    return this.staffManagementService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update details of a staff member' })
  @ApiResponse({
    status: 200,
    description: 'The staff member details have been successfully updated.',
  })
  update(
    @Param('id') id: string,
    @Body() updateStaffManagementDto: UpdateStaffManagementDto,
  ): Promise<void> {
    return this.staffManagementService.update(id, updateStaffManagementDto);
  }

  @Patch(':id/archive')
  @ApiOperation({ summary: 'Mark a staff member as archived' })
  @ApiResponse({
    status: 200,
    description: 'The staff member has been successfully archived.',
  })
  archive(@Param('id') id: number): Promise<void> {
    return this.staffManagementService.archive(id);
  }
}
