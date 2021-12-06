import dotenv from "dotenv";
import app from "./app";
import createUser from "./endpoints/createUser";
import { getAddressInfo } from "./endpoints/getAddressInfo";
import { sendEmail } from "./endpoints/sendEmail";

dotenv.config();

// Criar Usuário

app.post("/users/signup", createUser);

// Conseguir Edenreço com CEP

app.get("/CEP/:cep", getAddressInfo);

// Enviar Email

app.post("/sendemail", sendEmail);
