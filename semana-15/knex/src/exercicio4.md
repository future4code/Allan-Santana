<!-- Para finalizar o estudo, você vai criar mais um endpoint. Só que, antes, queremos dar mais um exemplo. Vamos fazer um endpoint para criar um novo ator. Para isso, devemos: -->

- Definir o método como `POST`
- Criar um path: `/actor`
- Receber os parâmetros pelo body

<!-- Perceba que tivermos que criar uma nova data. Isso acontece porque o JSON só envia para gente um número, um booleano ou uma string. Assim, como a nossa função espera receber um `Date`, devemos criar uma nova instância dessa classe. -->

<!-- Crie um endpoint para cada uma das especificações abaixo: -->

<!-- - a.
    - Deve ser um PUT (`/actor`)
    - Receber o salário e o id pelo body
    - Simplesmente atualizar o salário do ator com id em questão -->

<!-- // Update Salary - Query Builder -->

```
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

```
<!-- - b.
    - Deve ser um DELETE (`/actor/:id`)
    - Receber id do ator como *path param*
    - Simplesmente deletar o ator da tabela

    ``` -->
    
<!-- // Delet by Id - Query Builder -->

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
    
    ```