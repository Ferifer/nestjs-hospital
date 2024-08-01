import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStaffManagementDto } from './dto/create-staff-management.dto';
import { UpdateStaffManagementDto } from './dto/update-staff-management.dto';
import { StaffManagement } from './entities/staff-management.entity';

@Injectable()
export class StaffManagementService {
  constructor(
    @InjectRepository(StaffManagement)
    private staffRepository: Repository<StaffManagement>,
  ) {}

  create(
    createStaffManagementDto: CreateStaffManagementDto,
  ): Promise<StaffManagement> {
    const staff = this.staffRepository.create(createStaffManagementDto);
    return this.staffRepository.save(staff);
  }

  findAll(keyword?: string): Promise<StaffManagement[]> {
    const query = this.staffRepository.createQueryBuilder('staff');

    if (keyword) {
      query.where('staff.fullName LIKE :keyword OR staff.email LIKE :keyword', {
        keyword: `%${keyword}%`,
      });
    }

    return query
      .select(['staff.id', 'staff.fullName', 'staff.email'])
      .getMany();
  }

  findOne(id: string): Promise<StaffManagement> {
    return this.staffRepository.findOneBy({ id });
  }

  update(
    id: string,
    updateStaffManagementDto: UpdateStaffManagementDto,
  ): Promise<void> {
    return this.staffRepository
      .update(id, updateStaffManagementDto)
      .then(() => {});
  }

  archive(id: number): Promise<void> {
    return this.staffRepository.update(id, { archived: true }).then(() => {});
  }
}
