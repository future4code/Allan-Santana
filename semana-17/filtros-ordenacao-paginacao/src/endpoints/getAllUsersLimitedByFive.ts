import { connection } from "../data/connection";
import { Request, Response } from "express";

export default async function selectAllUsersLimitedByFive(page: any): Promise<any> {
    const pageNumber = (page - 1) * 5
  const result = await connection.raw(`
      SELECT *
      FROM aula49_exercicio
      LIMIT 5
      OFFSET ${pageNumber};
   `);

  return result[0];
}

export const getAllUsersLimitedByFive = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    
    const page = req.query.page
    const users = await selectAllUsersLimitedByFive(page);

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
