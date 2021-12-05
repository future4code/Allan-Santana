import connection from "../connection";
import { Request, Response } from "express";
import { product } from "../types/types";

export default async function tryToCreateNewProduct(
  id: number,
  name: string,
  price: number,
  image_url: string
): Promise<any> {
  const result = await connection.raw(`
    INSERT INTO labecommerce_products (id, name, price, image_url)
    VALUES ("${id}", "${name}", "${price}", "${image_url}");
   `);

  return result[0];
}

export const postNewProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = new Date().getTime();
    const { name, price, image_url }: product = req.body;

    if (!name) {
      res.statusCode = 404;
      throw new Error("Please, inform a user name.");
    }
    if (!price) {
      res.statusCode = 404;
      throw new Error("Please, inform a price.");
    }
    if (!image_url) {
      res.statusCode = 404;
      throw new Error("Please, provide a image url.");
    }

    let response = await tryToCreateNewProduct(
      id,
      name,
      Number(price),
      image_url
    );

    if (response.affectedRows > 0) {
      res.status(200).send("Product successfuly registered!");
    } else {
      throw new Error("Something has gone wrong.");
    }
  } catch (error: any) {
    console.log("erro", error);
    res.status(500).send(error.sqlMessage || error.message);
  }
};
