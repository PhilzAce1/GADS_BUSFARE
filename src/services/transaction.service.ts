import { transactionModel } from '../models/transaction.model'
import { Transaction } from '../interfaces/transaction.interface'
import { userModel } from '../models/users.model'
import HttpException from '../exceptions/HttpException'
export default class TransactionService {
    public transactions = transactionModel
    public user = userModel
    public async createNewTransaction(transactionData: Transaction): Promise<transactionModel> {
        const { from, to, amount } = transactionData
        const fromUser = await this.user.findOne(from)
        const toUser = await this.user.findOne(to)
        if (!fromUser || !toUser)
            throw new HttpException(400, "user does not exist")
        if (amount > fromUser?.currentBalance)
            throw new HttpException(400, "You have insufficient balance")

        const fromUserNewBalance = fromUser.currentBalance - amount
        const toUserNewBalance = toUser.currentBalance + amount

        await this.user.update({ id: to }, { currentBalance: toUserNewBalance })
        await this.user.update({ id: from }, { currentBalance: fromUserNewBalance })

        const newTransaction = await this.transactions.create(transactionData).save()


        return newTransaction
    }
    public async getTransactionById(id: number): Promise<transactionModel | undefined> {



        const transaction = await this.transactions.findOne({ where: { id: id } })

        return transaction
    }
    public async getAllUserTransaction(id: number) {
        // const allUserTransaction = await 
    }

}