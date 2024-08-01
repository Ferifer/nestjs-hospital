import { Module } from '@nestjs/common';
import { StaffManagementService } from './staff-management.service';
import { StaffManagementController } from './staff-management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffManagement } from './entities/staff-management.entity';

@Module({
  controllers: [StaffManagementController],
  providers: [StaffManagementService],
  imports: [TypeOrmModule.forFeature([StaffManagement])],
})
export class StaffManagementModule {}
