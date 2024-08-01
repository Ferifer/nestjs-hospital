import { Injectable } from '@nestjs/common';
import { CreateAppointmentManagementDto } from './dto/create-appointment-management.dto';
import { UpdateAppointmentManagementDto } from './dto/update-appointment-management.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AppointmentManagement } from './entities/appointment-management.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppointmentManagementService {
  constructor(
    @InjectRepository(AppointmentManagement)
    private appointmentRepository: Repository<AppointmentManagement>,
  ) {}

  create(
    createAppointmentManagementDto: CreateAppointmentManagementDto,
  ): Promise<AppointmentManagement> {
    const appointment = this.appointmentRepository.create(
      createAppointmentManagementDto,
    );
    return this.appointmentRepository.save(appointment);
  }

  findAll(keyword?: string): Promise<AppointmentManagement[]> {
    const query = this.appointmentRepository
      .createQueryBuilder('appointment')
      .leftJoinAndSelect('appointment.patient', 'patient')
      .leftJoinAndSelect('appointment.staff', 'staff');

    if (keyword) {
      query.where(
        'patient.fullName LIKE :keyword OR staff.fullName LIKE :keyword',
        { keyword: `%${keyword}%` },
      );
    }

    return query
      .select([
        'appointment.id',
        'patient.fullName',
        'staff.fullName',
        'appointment.appointmentDate',
        'appointment.status',
      ])
      .getMany();
  }

  findOne(id: string): Promise<AppointmentManagement> {
    return this.appointmentRepository.findOne({
      where: { id },
      relations: ['patient', 'staff'],
    });
  }

  update(
    id: number,
    updateAppointmentDto: UpdateAppointmentManagementDto,
  ): Promise<void> {
    return this.appointmentRepository
      .update(id, updateAppointmentDto)
      .then(() => {});
  }
}
