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
export class userReModel extends BaseEntity implements User {
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

  @Column()
  bankname: string;

  @Column()
  bankusername: string;

  @Column()
  accountnumber: number;
  @Column('numeric', { default: 0 })
  currentBalance: number

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

// // password: q1w2e3r4
const userModel: User[] = [

];

export default userModel;
