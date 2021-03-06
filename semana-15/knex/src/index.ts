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

// Amount by gender

app.get( "/actors/amountbygender/",  async (req: Request, res: Response) => {
  console.log('hu')
    try {
      const gender: any = req.query.gender
      
      if(gender !== 'male' && gender !== 'female'){
        throw new Error("Invalid gender.");
      }

      const response = await connection("Actor")
      .count().where({ gender: gender });
      console.log(response, 'teste')

      res.sendStatus(200).send({data: response});
    } catch (error: any) {
      res.status(500).send( error.sqlMessage || error.message );
    }
  }
);

// Get Actor by Id

app.get("/actors/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const response = await getActorById(id);

    console.log(response);
    res.sendStatus(200).send(response);
  } catch (error: any) {
    console.log(error.message);
    res.sendStatus(500).send(error.sqlMessage || error.message);
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
    res.sendStatus(200).send(response);
  } catch (error: any) {
    console.log(error.message);
    res.sendStatus(500).send(error.sqlMessage || error.message);
  }
});



// Update Salary - Query Builder

app.put("/actors/updatesalary/", async (req: Request, res: Response) => {
  const id = req.query.id;
  const salary = req.query.salary;

  try {
    if (!id || !salary) {
      throw new Error("Need to inform id and salary.");
    }

    if (!(id.length === 3) || !(typeof id === "string")) {
      throw new Error("Invalid Id.");
    }

    const response = await connection("Actor")
      .update({
        salary: salary,
      })
      .where({ id: id });

    console.log(response);
    res.sendStatus(200).send(response);
  } catch (error: any) {
    console.log(error.message);
    res.sendStatus(500).send(error.sqlMessage || error.message);
  }
});



// AVG Gender Salary - Query Builder

app.get("/actors/averagesalary/:gender", async (req: Request, res: Response) => {
  const gender = req.params.gender;

  console.clear

  try {
    if (!gender) {
      throw new Error("Need to inform gender.");
    }

    if (!(gender === "male") && !(gender === "female")) {
      throw new Error("Invalid gender.");
    }

    const response = await connection("Actor").avg("salary").where({ gender: gender }).groupBy({"gender": 'gender'});

    console.log(response[0])

    res.sendStatus(200).send(response[0]);

  } catch (error: any) {
    console.log(error.message);
    res.sendStatus(500).send(error.sqlMessage || error.message);
  }
});


// Delet by Id - Query Builder

app.delete("/actors/deletebyid/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    if (!id) {
      throw new Error("Need to inform id.");
    }

    if (!(id.length === 3) || !(typeof id === "string")) {
      throw new Error("Invalid Id.");
    }
    const response = await connection("Actor").delete().where({ id: id });

    res.sendStatus(200).send("Sucessfuly deleted actor");
  } catch (error: any) {
    console.log(error.message);
    res.sendStatus(500).send(error.sqlMessage || error.message);
  }
});

// 