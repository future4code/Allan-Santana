import express, { Express } from 'express';
import cors from 'cors';


const app: Express = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
	const users = new User('1', 'aaa@aa.com', 'Allan Gilber', '123456');
	console.log(users);
	console.log('Server ready!');
});

export default app; 