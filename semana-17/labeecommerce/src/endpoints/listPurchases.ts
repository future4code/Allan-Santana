import connection from "../connection";
import { Request, Response } from "express";

export async function getlistOfPurchases(id: string): Promise<any> {
  const result = await connection.raw(`
    SELECT * FROM labecommerce_purchases
    WHERE user_id = "${id}";
   `);
  return result[0];
}

export const listPurchases = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id: string = req.params.user_id;

  try {
    if (!id) {
      throw new Error("Please, inform a user Id.");
    }

    let response = await getlistOfPurchases(id);

    if (!response.length) {
      throw new Error("No purchases found for the indicated user id.");
    }

    res.status(200).send(response);
  } catch (error: any) {
    console.log(error);
    res.status(500).send(error.sqlMessage || error.message);
  }
};
