import { Request, Response } from "express";
import { addressConsult } from "../services/addressConsult";

export const getAddressInfo = async (req: Request, res: Response) => {
  let cep: any = req.params.cep;

  try {
    let addres: any = await addressConsult(cep);

    if (!addres.message && !addres.erro) {
      res.status(200).send({
        Logradouro: addres.logradouro,
        Bairro: addres.bairro,
        Cidade: addres.localidade,
        Estado: addres.uf,
      });
    } else {
      throw new Error(addres.erro);
    }
  } catch (error: any) {
    console.log(error, "ssd");
    error
      ? res.status(500).send({ message: "Internal Server Error" })
      : res.status(400).send({ message: error.message });
  }
};
