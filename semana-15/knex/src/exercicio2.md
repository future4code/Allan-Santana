## a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
```
    const response = await connection("Actor")
    .update({
      salary: salary
    })
    .where({ id: id })

```

## b. Uma função que receba um id e delete um ator da tabela

```
    const response = await connection("Actor")
    .delete()
    .where({ id: id });

```

## c. Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`

````
    const response = await connection("Actor").avg("salary").where({ gender: gender }).groupBy({"gender": 'gender'});
```