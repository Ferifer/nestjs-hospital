import { PatientManagement } from 'src/patient-management/entities/patient-management.entity';
import { StaffManagement } from 'src/staff-management/entities/staff-management.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointment_management')
export class AppointmentManagement extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  //   @ManyToOne(() => PatientManagement)
  //   @JoinColumn({ name: 'patientId' })
  @Column({ type: 'uuid' })
  patientID: PatientManagement;

  //   @ManyToOne(() => StaffManagement)
  //   @JoinColumn({ name: 'staffId' })
  @Column({ type: 'uuid' })
  staff: StaffManagement;

  @Column()
  appointmentDate: Date;

  @Column()
  purpose: string;

  @Column({ default: 'scheduled' })
  status: string;
}
