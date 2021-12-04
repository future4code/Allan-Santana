import connection from "../connection";
import { Request, Response } from "express";
import { product } from "../types/types";

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

  console.log("entrou");

  try {

    let response = await getListOfProducts();

    res.status(200).send(response);
    } catch (error: any) {
    console.log(error);
    res.status(500).send(error.sqlMessage || error.message);
  }
};
