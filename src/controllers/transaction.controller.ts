import { NextFunction, Request, Response } from "express"
import { TransactionDto } from "../dtos/transaction.dto"
import transactionService from '../services/transaction.service'

export default class TransactionController {
    public transaction = new transactionService()

    // create a transaction
    public createNewTrasaction = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const transactionData: TransactionDto = req.body
        try {
            const createdTransaction = await this.transaction.createNewTransaction(transactionData)

            res.status(200).json({ success: true, data: createdTransaction })
        } catch (error) {
            next(error)

        }
    }

    // get transaction by Id
    public getTransactionById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        console.log('calling getTransaction')
        try {
            const id = Number(req.params.id)
            const trasaction = await this.transaction.getTransactionById(id)
            if (trasaction) {
                res.status(200).json({ success: true, data: trasaction })

            } else {
                res.status(404).json({
                    success: false,
                    data: "the transaction does not exist"
                })
            }

        } catch (error) {
            next(error)

        }
    }

    // get all user  transaction by userId
    public getAllUserTransaction = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const userId = Number(req.params.userId)
        console.log('calling getTransactionUSer')

        try {
            const allUserTransaction = await this.transaction.getAllUserTransaction(userId)

            // res.status(200).json({success:})
        } catch (error) {
            next(error)

        }
    }

} 