import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { Request, Response } from "express";
import { emit } from "process";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(
      `Welcome aboard captain. All systems online. Your server is running in port numer: ${address.port}`
    );
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// GET User by Id

const getUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM ToDoListUsersAccounts
  WHERE id = "${id}";
  `);

  return result[0][0];
};

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    let response = await getUserById(id);

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send("User not found.");
    }
  } catch (error: any) {
    res.status(500).send(error.mesage);
  }
});

// GET User by Id

const getTaskById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM ToDoTaskList
  LEFT JOIN ToDoListUsersAccounts
  ON ToDoTaskList.user_id = ToDoListUsersAccounts.id
  WHERE ToDoTaskList.id = "${id}";
  `);

  return result[0][0];
};

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    let response = await getTaskById(id);

    if (response) {
      const date = response.limit_date.toISOString().split("-");

      const newDate =
        `${date[2].split("T")[0]}` + "/" + `${date[1]}` + "/" + `${date[0]}`;

      const responseToUser = {
        taskId: response.id,
        title: response.title,
        description: response.description,
        limitDate: newDate,
        status: response.state,
        creatorUserId: response.user_id,
        creatorUserNickname: response.nickname,
      };

      res.status(200).send(responseToUser);
    } else {
      res.status(500).send("Task not found.");
    }
  } catch (error: any) {
    res.status(500).send(error.mesage);
  }
});

// PUT Edit User

const updateUser = async (
  id: string,
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  let body = `UPDATE ToDoListUsersAccounts`;
  if (name) {
    body = body + ` SET name = "${name}",`;
  }
  if (nickname) {
    body = body + ` nickname = "${nickname}",`;
  }
  if (email) {
    body = body + ` email = "${email}",`;
  }

  body = body.substring(0, body.length - 1) + `WHERE id = "${id}";`;

  const result = await connection.raw(body);

  return result[0];
  // return 'lol'
};

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  const { name, nickname, email } = req.body;
  const id = req.params.id;

  try {
    if (!id) {
      throw new Error("Missing user Id.");
    }

    if (name === "" || nickname === "" || email === "") {
      throw new Error(
        "Blank data. Please insert the information you want to change o remove the field."
      );
    }

    // const bodyOfRequisition = name ? `SET ${name}`
    let response = await updateUser(id, name, nickname, email);

    if (response.affectedRows > 0) {
      res.status(200).send("Information has been updated.");
    } else {
      res.status(500).send("Something has gone wrong.");
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

// POST New User

const tryToCreateNewUser = async (
  id: number,
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  const result = await connection.raw(`
    INSERT INTO ToDoListUsersAccounts (id, name, nickname, email)
    VALUES ("${id}", "${name}", "${nickname}", "${email}" );
    `);

  return result[0];
};

app.post("/user", async (req: Request, res: Response) => {
  const { name, nickname, email } = req.body;

  try {
    if (!name || !nickname || !email) {
      throw new Error(
        "Incomplete data. Please inform a name, nickname and email."
      );
    }
    const id = new Date().getTime();

    let response = await tryToCreateNewUser(id, name, nickname, email);

    if (response.affectedRows > 0) {
      res.status(200).send("User account successfuly created!");
    } else {
      res.status(500).send("Something has gone wrong.");
    }
  } catch (error: any) {
    res.status(500).send(error.mesage);
  }
});

// POST New Task

const tryToCreateNewTask = async (
  id: number,
  title: string,
  description: string,
  limitDate: string,
  creatorUserId: string
): Promise<any> => {
  const result = await connection.raw(`
  INSERT INTO ToDoTaskList (id, title, description, limit_date, user_id)
  VALUES ("${id}", "${title}", "${description}", "${limitDate}", "${creatorUserId}" );
  `);

  return result[0];
};

app.post("/task", async (req: Request, res: Response) => {
  const { title, description, limitDate, creatorUserId } = req.body;

  try {
    if (!title || !description || !limitDate || !creatorUserId) {
      throw new Error(
        "Incomplete data. Please inform a title, description, limit date and the creator user Id."
      );
    }

    const id = new Date().getTime();

    const date = limitDate.split("/");

    const newDate = date[2] + "-" + date[1] + "-" + date[0];

    let response = await tryToCreateNewTask(
      id,
      title,
      description,
      newDate,
      creatorUserId
    );

    if (response.affectedRows > 0) {
      res.status(200).send("New task successfuly created!");
    } else {
      res.status(500).send("Something has gone wrong.");
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});
