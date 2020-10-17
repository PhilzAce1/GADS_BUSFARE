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

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column('numeric', { default: 0 })
  role: number;

  @Column({ nullable: true })
  bankname: string;

  @Column({ nullable: true })
  bankusername: string;

  @Column({ nullable: true })
  accountnumber: number;

  @Column('numeric', { default: 0 })
  currentBalance: number

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
