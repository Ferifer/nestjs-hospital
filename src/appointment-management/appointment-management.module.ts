import { Module } from '@nestjs/common';
import { AppointmentManagementService } from './appointment-management.service';
import { AppointmentManagementController } from './appointment-management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentManagement } from './entities/appointment-management.entity';

@Module({
  controllers: [AppointmentManagementController],
  providers: [AppointmentManagementService],
  imports: [TypeOrmModule.forFeature([AppointmentManagement])],
})
export class AppointmentManagementModule {}
