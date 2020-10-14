import { Router } from 'express'
import Route from 'src/interfaces/routes.interface';

export default class TransactionRoute implements Route {
    public router = Router()
    public path = '/transaction'
    private initializeRoutes() {
        this.router.post(`${this.path}`,)
    }
}
// export default TransactionRoute