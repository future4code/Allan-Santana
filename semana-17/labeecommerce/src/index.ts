import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { Request, Response } from "express";
import { signupUser } from "./endpoints/signupUser";
import { listUsers } from "./endpoints/listUsers";
import { postNewProduct } from "./endpoints/postNewProduct";
import { listProducts } from "./endpoints/listProducts";
import { postRegisterPurchase } from "./endpoints/postRegisterPurchase";
import { listPurchases } from "./endpoints/listPurchases";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// Get User List

app.get("/users", listUsers);

// Get Products List

app.get("/products", listProducts);

// Get Purchase List

app.get("/users/:user_id/purchases", listPurchases);

// POST User Account Creation

app.post("/users", signupUser);

// POST New Product

app.post("/products", postNewProduct);

// POST Register Purchase

app.post("/purchases", postRegisterPurchase);
