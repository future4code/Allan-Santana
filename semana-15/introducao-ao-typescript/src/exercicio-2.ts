// Observe a função a seguir, escrita em JavaScript:

function obterEstatisticas(numeros: number[]): {maior: number, menor: number, media: number}{

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number= 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([1, 8, 2, 6, 7, 66]))
// a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

// Entrada é um array de números e a saida é um objeto.

// b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas 

// A função obterEstatisticas que é uma função que recebe um array de números e retorna um objeto. A variável 'soma' que é um numero. A 'estatisticas' que é um objeto com diversas keys de números.

// c. Crie um *type* para representar uma **amostra** de dados, isto é, um objeto com as chaves **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

// const amostraDeIdades = {

// 		numeros: [21, 18, 65, 44, 15, 18],

// 		obterEstatisticas: (numeros) => {...}
// }

type amostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => {maior: number, menor: number, media: number}
}