import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Welcome aboard captain. All systems online.");
});

//endpoint para testar o servidor
app.get("/", (req, res) => {
  res.send("Hello!");
});

// Get Actor by Id

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = "${id}"
    `);

  return result[0][0];
};

app.get("/actors/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const response = await getActorById(id);

    console.log(response);
    res.status(200).send(response);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});

// Search by name

const searchActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name LIKE "%${name}%"
    `);

  return result[0][0];
};

app.get("/actors/search/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name;

    const response = await searchActorByName(name);

    console.log(response);
    res.status(200).send(response);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});

// Amount by gender

const getAmountByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}" GROUP BY gender
    `);

  return result[0][0];
};

app.get(
  "/actors/amountbygender/:gender",
  async (req: Request, res: Response) => {
    try {
      const gender = req.params.gender;

      const response = await getAmountByGender(gender);

      console.log(response);
      res.status(200).send(response);
    } catch (error: any) {
      console.log(error.message);
      res.status(500).send("Unexpected error");
    }
  }
);

// Update Salary

const updateSalary = async (id: any, salary: any): Promise<any> => {
    const fixedSalary = Number(salary)

    console.log(typeof(fixedSalary))

    const result = await connection.raw(`
      UPDATE Actor 
      SET salary = ${fixedSalary}
      WHERE id = "${id}"
      `);

    return `The salary of the Actor of Id ${id} is now: R$ ${salary}` ;
  };


app.put("/actors/updatesalary/", async (req: Request, res: Response) => {

  const id = req.query.id;
  const salary = req.query.salary;

  try {
    if (!id || !salary) {
      throw new Error("Need to inform id and salary.");
    }

    if(!(id.length === 3) || !(typeof(id) === "string")){
      throw new Error("Invalid Id.");
    }

    const response = await updateSalary(id, Number(salary));

    console.log(response);
    res.status(200).send(response);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});
