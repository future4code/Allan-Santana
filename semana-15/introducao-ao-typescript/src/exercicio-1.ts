// Hoje conhecemos uma "nova linguagem", que é muito parecida com o Javascript, mas que tem alguns adicionais muito importantes para nós. Abaixo temos algumas perguntas e solicitações de escrita de código. Você pode responder as perguntas comentando no arquivo TS.

// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

let minhaString: string = 'teste'
// minhaString = 3

// O typescript apontou erro de que a variável não aceita valor tipo number.




// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?

let meuNumero: number | string = '3'

// Para criarmos uma variável que aceite dois tipos de variável, devemos separar o nome dos tipos de variável por '|'

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

let objeto: {nome: string, idade: number, corFavorita: string} = {
    nome: 'Allan',
    idade: 27,
    corFavorita: 'Azul'
}

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
// d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um `enum` para isso.


enum coresDoArcoiris{
    cor1 = 'violeta',
    cor2 = 'anil', 
    cor3 = 'azul', 
    cor4 = 'verde', 
    cor5 = 'amarelo', 
    cor6 = 'laranja',
    cor7 = 'vermelho'
}

type pessoa ={
    nome: string,
    idade: number,
    corFavorita: coresDoArcoiris
} 

let objeto2: pessoa = {
    nome:'Yuzo',
    idade: 26,
    corFavorita: coresDoArcoiris.cor1

}

let objeto3: pessoa = {
    nome:'Maria',
    idade: 29,
    corFavorita: coresDoArcoiris.cor2

}

let objeto4: pessoa = {
    nome:'João',
    idade: 32,
    corFavorita: coresDoArcoiris.cor3

}

console.log(objeto2)
