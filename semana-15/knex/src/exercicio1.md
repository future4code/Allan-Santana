## a. Explique como é a resposta que temos quando usamos o `raw`.

A resposta do raw é idêntica a resposta recebida pelo mysql. Ela vem distribuída em vários arrays de objetos com as informações da requisição e relativas ao banco de dados.

## b. Faça uma função que busque um ator pelo nome;
```
  const searchActorByName = async (name: string): Promise<any> =>{
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name LIKE "%${name}%"
    `)

    return result[0][0].count
}
```

## c. Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.

````
  const getAmountByGender = async (gender: string): Promise<any> =>{
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}" GROUP BY gender
    `)

    return result[0][0]
}
```