import connection from "../connection";
import { Request, Response } from "express";

export default async function getListOfProducts(): Promise<any> {
  const result = await connection.raw(`
    SELECT * FROM labecommerce_products;
   `);
  return result[0];
}

export const listProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let response = await getListOfProducts();

    res.status(200).send(response);
  } catch (error: any) {
    console.log(error);
    res.status(500).send(error.sqlMessage || error.message);
  }
};
