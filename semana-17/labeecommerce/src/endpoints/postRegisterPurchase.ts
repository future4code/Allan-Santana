import connection from "../connection";
import { Request, Response } from "express";
import { purchaseBody } from "../types/types";

export async function getPrice(product_id: string): Promise<any> {
  const result = await connection.raw(`
      SELECT price FROM labecommerce_products
      WHERE id = "${product_id}";
     `);
  return result[0][0];
}

export async function tryToRegisterPurchase(
  id: number,
  user_id: string,
  product_id: string,
  quantity: number,
  total_price: number
): Promise<any> {
  const result = await connection.raw(`
    INSERT INTO labecommerce_purchases (id, user_id, product_id, quantity, total_price)
    VALUES ("${id}", "${user_id}", "${product_id}", "${quantity}", "${total_price}");
   `);
  return result[0];
}

export const postRegisterPurchase = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = new Date().getTime();
    const { user_id, product_id, quantity }: purchaseBody = req.body;

    if (!user_id) {
      res.statusCode = 404;
      throw new Error("Please, inform a user user Id.");
    }
    if (!product_id) {
      res.statusCode = 404;
      throw new Error("Please, inform a product Id.");
    }
    if (!quantity) {
      res.statusCode = 404;
      throw new Error("Please, provide the amount hat you wanna buy.");
    }

    let price = await getPrice(product_id);

    if (!price) {
      throw new Error("Invalid product Id.");
    }
    const total_price = price.price * Number(quantity);

    let response = await tryToRegisterPurchase(
      id,
      user_id,
      product_id,
      quantity,
      total_price
    );

    if (response.affectedRows > 0) {
      res.status(200).send("Purchase was successfuly!");
    } else {
      throw new Error("Something has gone wrong.");
    }
  } catch (error: any) {
    console.log("erro", error);
    if (!error || !error.TypeError) {
      res.status(500).send("Product not found.");
    }
    if (error.errno === 1452) {
      res.status(500).send("User Id is incorrect.");
    } else {
      res.status(500).send(error.sqlMessage || error.message);
    }
  }
};
