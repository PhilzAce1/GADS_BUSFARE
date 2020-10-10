console.clear();
import 'dotenv/config';
import 'reflect-metadata';
import App from './app';
import { createConnection } from 'typeorm';
import { userReModel as UserModel } from './models/users.model';
import AuthRoute from './routes/auth.route';
import IndexRoute from './routes/index.route';
import UsersRoute from './routes/users.route';
import validateEnv from './utils/validateEnv';
import { sendMessage } from './utils/sendMail';
validateEnv();
sendMessage('somemessage', 'akuagwuphilemon11@gmail.com').catch(console.error)
createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'ogaticket',
  synchronize: true,
  logging: false,
  entities: [UserModel],
})
  .then(() => console.log('connected to the Database '))
  .catch(console.error);

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

app.listen();
