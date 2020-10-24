import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../interfaces/users.interface';
@Entity()
export class userModel extends BaseEntity implements User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  email: string;

  @Column('numeric', { default: 0 })
  role: number;

  @Column({ nullable: true })
  bankname: string;

  @Column({ nullable: true })
  bankusername: string;

  @Column({ nullable: true })
  accountnumber: number;

  @Column('numeric', { default: 0 })
  currentBalance: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
