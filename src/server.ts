console.clear();
import 'dotenv/config';
import 'reflect-metadata';
import App from './app';
import { createConnection } from 'typeorm';
import { userModel as UserModel } from './models/users.model';
import { transactionModel } from './models/transaction.model'
import AuthRoute from './routes/auth.route';
import IndexRoute from './routes/index.route';
import UsersRoute from './routes/users.route';
import validateEnv from './utils/validateEnv';
import { sendMessage } from './utils/sendMail';
import TransactionRoute from './routes/transaction.route';
validateEnv();
createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'busfare',
  synchronize: true,
  logging: false,
  entities: [UserModel, transactionModel],
})
  .then(() => console.log('connected to the Database '))
  .catch(console.error);

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new TransactionRoute()]);

app.listen();
