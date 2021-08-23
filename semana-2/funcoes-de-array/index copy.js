/* INTERPRETAÇÃO DE CÓDIGO
Questão 1:
a) Amanda Rangel, 0, { nome: "Amanda Rangel", apelido: "Mandi" }
Amanda Rangel, 1, {nome: "Laís Petra", apelido: "Laura" }
Letícia Chijo, 2, {nome: "Letícia Chijo", apelido: "Chijo"}

Questão 2:
a) Um array com ["Amanda Rangel", "Laís Petra", "Letícia Chijo"].

Questão 3:
a) Um array com [{ nome: "Amanda Rangel", apelido: "Mandi" },  { nome: "Laís Petra", apelido: "Laura" }]
*/

// QUESTÕES DE ESCRITA DE CÓDIGO
// Questão 1: Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

let nomesDosDogs = pets.map((item, index, array) =>{
    return item.nome
})

console.log(nomesDosDogs)

// b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

let cachorrosSalsichas = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
        
})

console.log(cachorrosSalsichas)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

let descontoPoodles = pets.map((item, index, array) => {
    if (item.raca === "Poodle"){
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
    }
    }
)

let cleanArray = descontoPoodles.filter((item, index, array)=>{
    return item !== undefined
})

console.log(cleanArray)

// QUESTÃO 2: Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a) Crie um novo array que contenha apenas o nome de cada item

let nomeDosProdutos = produtos.map((item, indice, array)=>{
    return item.nome
}
)
console.log(nomeDosProdutos)

//  b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

let descontoDosProdutos = produtos.map((item, indice, array)=>{
    return {nome: item.nome, preco: item.preco*0.95 }
}
)

console.log(descontoDosProdutos)

//  c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

let bebidas = produtos.filter((item, indice, array)=>{
    return item.categoria === "Bebidas"
}
)
console.log(bebidas)
 
//  d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

let ypes = produtos.filter((item, indice, array)=>{
    return item.nome.includes("Ypê")
}
)
console.log(ypes)

//  e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

let arrayBackup = []
let compreYpes = produtos.map((item, indice, array)=>{
    if (item.nome.includes("Ypê"))
    return `Compre ${item.nome} por ${item.preco}]`
})

let compreYpesArrayLimpo = compreYpes.filter((item, indice, array) =>{
    return item !== undefined
})
console.log(compreYpesArrayLimpo)