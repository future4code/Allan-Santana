import { connection } from "../data/connection";
import { Request, Response } from "express";

export default async function selectAllUsersAllParams(
  name: any,
  type: any,
  sortMod: any,
  orderBy: any,
  page: any
): Promise<any> {
  const pageNumber = (page - 1) * 5;

  let query = `SELECT * FROM aula49_exercicio WHERE `;

  if (name) {
    query = query + `name LIKE "%${name}%" `;
  }
  if (name && type) {
    query = query + ` && `;
  }
  if (type) {
    query = query + `type LIKE "%${type}%"`;
  }
  if (orderBy) {
    query = query + ` ORDER BY ${orderBy}`;
  } else {
    query = query + ` ORDER BY email`;
  }
  if (sortMod === "DESC") {
    query = query + ` DESC`;
  } else {
    query = query + ` ASC`;
  }
  if (pageNumber) {
    query = query + ` LIMIT 5 OFFSET ${pageNumber};`;
  } else {
    query = query + ` LIMIT 5 OFFSET 0;`;
  }

  console.log(query);

  const result = await connection.raw(query);

  return result[0];
}

export const getAllUsersAllParams = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("entrou");
  try {
    const name = req.query.name;
    const type = req.query.type;
    const sortMod = req.query.sortMod;
    const orderBy = req.query.orderBy;
    const page = req.query.page;

    console.log("sdas", name, type, sortMod, orderBy, page);

    const users = await selectAllUsersAllParams(
      name,
      type,
      sortMod,
      orderBy,
      page
    );

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
