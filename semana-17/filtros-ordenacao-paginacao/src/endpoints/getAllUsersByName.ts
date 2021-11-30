import { connection } from "../data/connection";
import { Request, Response } from "express";

export default async function selectAllUsersByName(name: any): Promise<any> {
  const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula49_exercicio
      WHERE name LIKE "%${name}%";
   `);

  return result[0];
}

export const getAllUsersByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log('entrou')
  try {

    const name = req.query.name
    const users = await selectAllUsersByName(name);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
