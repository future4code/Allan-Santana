import { usersList } from "./data";
import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { users } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Welcome aboard captain. All systems online.");
});

app.get("/users/:type", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    if (
      req.params.type.toLocaleLowerCase() !== "normal" &&
      req.params.type.toLocaleLowerCase() !== "admin"
    ) {
      throw new Error("invalid 'type' paramter.");
    }

    const type: string = req.params.type.toLocaleLowerCase();

    const response = usersList.filter((user: users) => {
      return type === user.type.toLocaleLowerCase();
    });

    if (response.length) {
      res.status(200).send(response);
    } else {
      errorCode = 404;
      throw new Error("none of the users matched the request paramters.");
    }
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/users", (req: Request, res: Response) => {
  console.log(typeof req.query.name);

  let errorCode = 400;

  let name: any = req.query.name;

  try {
    if (!name) {
      res.status(200).send({ usersList });
    } else {
      let response = usersList.filter((user: users) => {
        return user.name.toLowerCase().includes(name);
      });

      if (response.length) {
        res.status(200).send(response);
      } else {
        errorCode = 404;
        throw new Error("none of the users matched the request paramters.");
      }
    }
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.put("/users/", (req: Request, res: Response) => {

  let errorCode = 400;

  try {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      throw new Error("One or more missing proprieties.");
    } else {
      const id = usersList.length + 1;

      usersList.push({
        id: id,
        name: name,
        email: email,
        type: "NORMAL",
        age: age,
      });

      console.log(usersList.filter((user) => user.id === id).length);

      if (usersList.filter((user) => user.id === id).length) {
        res
          .status(200)
          .send({ message: "new user created!", newuser: usersList[id] });
      } else {
        res.status(400).send("Error: something has gone wrong");
      }
    }
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});
