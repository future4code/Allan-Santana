import express from "express";
import cors from "cors";
import { countries } from "./data";
import { country } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("servidor pronto!");
});

// Busca com filtros

app.get("/countries/search", (req, res) => {
  const name: any = req.query.name;
  const capital: any = req.query.capital;
  const continent: any = req.query.continent;
  let result: country[] = countries;

  if (name || capital || continent) {
    if (name) {
      result = result.filter((country) => {
        return country.name
          .toLowerCase()
          .includes(name.toString().toLowerCase());
      });
    }
    if (capital) {
      result = result.filter((country) => {
        return country.capital
          .toLowerCase()
          .includes(capital.toString().toLowerCase());
      });
    }
    if (continent) {
      result = result.filter((country) => {
        return country.continent
          .toLowerCase()
          .includes(continent.toString().toLowerCase());
      });
    }
    res.status(200).send(result);
  } else {
    res.status(400).send({
      badRequest: "please inform the paramters for your search",
    });
  }
});


// Todos os países

app.get("/countries", (req, res) => {
    const nameAndIdMapping = countries.map((country) => {
        return {
          id: country.id,
          name: country.name,
        };
      });
      if(nameAndIdMapping){
        res.status(200).send(nameAndIdMapping);
      }else{
        res.status(400).send("Database Error");
      }
});

// Editar País

app.put("/countries/:id", (req, res) => {
  const body: { name: string; capital: string } = req.body;
  const id: number = Number(req.params.id);

    const index: number = countries.findIndex((country) => {
        return country.id === id;
      });

      body.name && (countries[index].name = body.name)
      body.capital && (countries[index].capital = body.capital)

  if (index &&
    ((body.name && countries[index].name == body.name) ||
    (body.capital && countries[index].capital == body.capital))
  ) {
    res.status(200).send(["Alterações realizadas com sucesso", countries[index]]);
  } else {
    index !== -1 ? (res.status(500).send("Internal Error: As alterações não puderam ser realizadas ")) : (res.status(400).send("Erro: A ID informada é inválida"));
  }
});

// País por ID
app.get("/countries/:id", (req, res) => {
  const id = Number(req.params.id);
  res.status(200).send(
    countries.filter((country) => {
      if (country.id === id) return country;
    })
  );
});
