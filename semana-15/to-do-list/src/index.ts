import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Welcome aboard captain. All systems online. Your server is running in port numer: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


// New User

const tryToCreateNewUser = async (id: number, name: string, nickname: string, email: string): Promise<any> =>{
    const result = await connection.raw(`
    INSERT INTO ToDoListUsersAccounts (id, name, nickname, email)
    VALUES ("${id}", "${name}", "${nickname}", "${email}" );
    `)

    console.log(result[0], 'resultado')
    return result[0]
}

app.post('/user', async (req: Request, res: Response) =>{

    const {name, nickname, email} = req.body

    console.log(name, nickname, email)

    try {
        const id = new Date().getTime()

        let response = await tryToCreateNewUser(id, name, nickname, email)

        console.log(response);


        res.status(200).send(response);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send(error.sqlMessage || error.mesage);
    }
})
