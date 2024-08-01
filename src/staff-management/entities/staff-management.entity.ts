import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class StaffManagement extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column()
  startDateOfEmployment: Date;

  @Column({ default: false })
  archived: boolean;
}
