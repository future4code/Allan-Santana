import { connection } from "../data/connection";
import { Request, Response } from "express";

export default async function selectAllUsersByOrder(name: any, type: any, sortMod: any, orderBy: any): Promise<any> {
    let query = `SELECT * FROM aula49_exercicio WHERE `

    if(name){
        query = query + `name LIKE "%${name}%" `
    }
    if(name && type){
        query = query + ` && `
    }
    if(type){
        query = query + `type LIKE "%${type}%"`
    }
    if(orderBy){
        query = query + ` ORDER BY ${orderBy}`
    } else{
        query = query + ` ORDER BY email`
    }
    if(sortMod === "DESC"){
        query = query + ` DESC`
    } else{
        query = query + ` ASC`
    }

    console.log(query)

  const result = await connection.raw(query);

  return result[0];
}

export const getAllUsersInOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("entrou");
  try {
    const name = req.query.name
    const type = req.query.type
    const sortMod = req.query.sortMod
    const orderBy = req.query.orderBy

    console.log('sdas', name, type, sortMod, orderBy)

    const users = await selectAllUsersByOrder(name, type, sortMod, orderBy);

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
