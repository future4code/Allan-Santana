import connection from "../connection";
import { Request, Response } from "express";
import { user } from "../types/types";

export default async function getListOfUsers(): Promise<any> {
  const result = await connection.raw(`
    SELECT * FROM labecommerce_users;
   `);
  return result[0];
}

export const listUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    let response = await getListOfUsers();

    res.status(200).send(response);
  } catch (error: any) {
    console.log(error);
    res.status(500).send(error.sqlMessage || error.message);
  }
};
