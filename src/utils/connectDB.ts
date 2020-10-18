import { createConnection, getConnectionOptions } from 'typeorm'
import { userModel } from '../models/users.model'
import { transactionModel } from '../models/transaction.model'
async function connect() {
    const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);

    return process.env.NODE_ENV === "production"
        ? createConnection({
            ...connectionOptions,
            url: process.env.DATABASE_URL,
            entities: [userModel, transactionModel],
            name: "default"
        } as any)
        : createConnection({
            ...connectionOptions, name: "default",
            entities: [userModel, transactionModel],
        });
}
export async function database() {
    let retries = 10;
    while (retries) {
        try {
            await connect();
            console.log('Database connected');
            break;
        } catch (err) {
            console.log(err);
            retries -= 1;
            console.log(`retries left: ${retries}`);
            // wait 5 seconds
            await new Promise((res) => setTimeout(res, 5000));
        }
    }
}
