import { IsInt, IsEmpty } from 'class-validator'
export class TransactionDto {
    @IsInt()
    from: number;
    @IsInt()
    to: number
    @IsInt()
    amount: number
}