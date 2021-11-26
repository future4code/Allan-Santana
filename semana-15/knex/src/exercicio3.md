## a. Crie um endpoint com as especificações acima
```
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
    res.status(500).send(error.sqlMessage || error.mesage);
  }
});
```

## b. Crie um endpoint agora com as seguintes especificações:

- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero

```
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

      res.sendStatus(200).send(response);
    } catch (error: any) {
      res.status(500).send( error.sqlMessage || error.message );
    }
  }
);
```