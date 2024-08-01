import { Injectable } from '@nestjs/common';
import { CreatePatientManagementDto } from './dto/create-patient-management.dto';
import { UpdatePatientManagementDto } from './dto/update-patient-management.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientManagement } from './entities/patient-management.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientManagementService {
  constructor(
    @InjectRepository(PatientManagement)
    private patientRepository: Repository<PatientManagement>,
  ) {}

  create(
    createPatientManagementDto: CreatePatientManagementDto,
  ): Promise<PatientManagement> {
    const patient = this.patientRepository.create(createPatientManagementDto);
    return this.patientRepository.save(patient);
  }

  findAll(keyword?: string): Promise<PatientManagement[]> {
    const query = this.patientRepository.createQueryBuilder('patient');

    if (keyword) {
      query.where(
        'patient.fullName LIKE :keyword OR patient.email LIKE :keyword',
        { keyword: `%${keyword}%` },
      );
    }

    return query
      .select(['patient.id', 'patient.fullName', 'patient.email'])
      .getMany();
  }

  findOne(id: string): Promise<PatientManagement> {
    return this.patientRepository.findOneBy({ id });
  }

  update(
    id: string,
    updatePatientManagementDto: UpdatePatientManagementDto,
  ): Promise<void> {
    return this.patientRepository
      .update(id, updatePatientManagementDto)
      .then(() => {});
  }

  deactivate(id: string): Promise<void> {
    return this.patientRepository.update(id, { inactive: true }).then(() => {});
  }
}
