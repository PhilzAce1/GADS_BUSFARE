import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Transaction } from '../interfaces/transaction.interface'
import { userModel as User } from './users.model'

@Entity()
export class transactionModel extends BaseEntity implements Transaction {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    from: number;
    @OneToOne(type => User, fromUser => fromUser.id) fromUser: User;


    @Column()
    to: number;
    @OneToOne(type => User, toUser => toUser.id) toUser: User;


    @Column()
    amount: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}