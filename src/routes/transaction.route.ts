import { Router } from 'express'
import { TransactionDto } from '../dtos/transaction.dto';
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';
import TransactionController from '../controllers/transaction.controller'

export default class TransactionRoute implements Route {
    public router = Router()
    public path = '/transaction'
    public transactionController = new TransactionController()
    constructor() {
        this.initializeRoutes()
    }
    private initializeRoutes() {
        // get transation by Id
        this.router.get(`${this.path}/:id`, this.transactionController.getTransactionById)

        // get all user's transactions
        this.router.get(`${this.path}/:userId`, this.transactionController.getAllUserTransaction)

        // create new Transaction 
        this.router.post(`${this.path}/create`,
            validationMiddleware(TransactionDto),
            this.transactionController.createNewTrasaction)
    }
}
// export default TransactionRoute