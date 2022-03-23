import express, { Express } from 'express';
import cors from 'cors';
import { Bank, UserAccount } from './index';
import { Transaction } from './types';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
	const accounts = new UserAccount('11111111111', 'Allan Gilber', 32);
	const data = new Transaction('transação comum', 35, '21/02/1934');

	data.getTransactionData();
	console.log(accounts);
	console.log('Result: ', Bank);
	console.log('Server ready!');
});

export default app;