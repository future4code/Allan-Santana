import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getAllRecipes } from "./endpoints/getAllRecipes"
import { getAllUsersByName } from "./endpoints/getAllUsersByName"
import { getAllUsersBytype } from "./endpoints/getAllUsersByType"
import { getAllUsersInOrder } from "./endpoints/getAllUsersInOrder"
import { getAllUsersLimitedByFive } from "./endpoints/getAllUsersLimitedByFive"

export const app = express()

app.use(express.json())
app.use(cors())

app.get("/recipes", getAllRecipes)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})


app.get("/users/", getAllUsersByName)

app.get("/users/:type", getAllUsersBytype)

app.get("/usersbyorder/", getAllUsersInOrder)

app.get("/userslimitedbyfive/", getAllUsersLimitedByFive)