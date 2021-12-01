import connection from "../connection";
import { Request, Response } from "express";
import { user } from "../types/newUser";

export default async function tryToCreateUser(
  id: number,
  name: string,
  email: string,
  password: string
): Promise<any> {

  // console.log(user)

  const result = await connection.raw(`
    INSERT INTO labecommerce_users (id, name, email, password)
    VALUES ("${id}", "${name}", "${email}", "${password}");
   `);

  return result[0];
}

export const signupUser = async (
  req: Request,
  res: Response
): Promise<void> => {

  console.log("entrou");

  try {
    const id = new Date().getTime();
    const { name, email, password }: user = req.body;

    // let statusCode = 500;

    if (!name) {
      res.statusCode = 404;
      throw new Error("Please, inform a user name.");
    }
    if (!email) {
      res.statusCode = 404;
      throw new Error("Please, inform a email.");
    }
    if (!password) {
      res.statusCode = 404;
      throw new Error("Please, inform a password.");
    }

    let response = await tryToCreateUser(id, name, email, password);

    res.status(200).send(response);
    } catch (error: any) {
    console.log(error);
    res.status(error.statusCode).send(error.message || error.sqlMessage);
  }
};
