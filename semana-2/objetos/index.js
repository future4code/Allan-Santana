/*
Questão 1:
a) será impresso no console o seguinte:
Matheus Nachtergaele
Virginia Cavendish
Canal Brasil 19h
 
Questão 2:
a) Será impresso o seguinte:
Juca 3 SRD
Juba 3 SRD
Juco 3 SRD
b) Ela parte do objeto indicado após as reticências e procede com as modificações ou incrementos indicados após. Essa sintaxe é chamada de spread.
Questão 3:
a) Será impresso o seguinte:
false
undefined
b) A função "minhaFuncao" foi invocada pelo console e ela contém como parâmetro retornar o primeiro argumento informado seguido do segundo argumento entre colchetes. Diante disso teremos a execução do seguinte comando: "pessoa[backender]". Tal comando tem por fim invocar o objeto pessoa e nele procurar pela definição "backender". Caso ela exista, ele retornará o valor nela estabelecido ou undefined/null(conforme o caso)
*/
// Exercícios de escrita de código
// Questão 1:
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
let pessoa = {
    nome: "Allan Gilber",
    apelidos: ["Allanzito", "Gilber", "Allandelon"]
}
    
function nomeEApelido (objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}`)
}
nomeEApelido(pessoa)
// b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
let pessoa2 ={
    ...pessoa,
    apelidos: ["Lanzinho", "Lan", "Gilbert"]
}
nomeEApelido(pessoa2)
// Questão 2:
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
let pessoa3 = {
    nome:"João",
    idade:"23",
    profissão: "Backender"
}
let pessoa4 = {
    nome:"Maria",
    idade:"26",
    profissão: "Frontender"
}
// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
function quemSao () {
    primeiraPessoa = [pessoa3.nome, pessoa3.nome.length, pessoa3.idade, pessoa3.profissão, pessoa3.profissão.length]
    segundaPessoa = [pessoa4.nome, pessoa4.nome.length, pessoa4.idade, pessoa4.profissão, pessoa4.profissão.length],
    console.log(primeiraPessoa, segundaPessoa)
    }
quemSao()
// Questão 3:
// a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
let carrinho = []
// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
let maca = {
    nome: "maçã",
    disponibilidade: true
}
let banana = {
    nome: "banana",
    disponibilidade: true
}
let uva = {
    nome: "uva",
    disponibilidade: true
}
// c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 
function compraDoSacolao (fruta) {
    carrinho.push(fruta)
}
compraDoSacolao (maca)
compraDoSacolao (banana)
compraDoSacolao (uva)
// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 
console.log(carrinho)

// DESAFIOS
// Questão 1: Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.
let informacoesPessoais = {
    nome:"",
    idade:"",
    profissao:""
}
informacoesPessoais.nome = prompt("Qual seu nome?")
informacoesPessoais.idade = prompt("Qual sua idade?")
informacoesPessoais.profissao = prompt("Qual sua profissão?")
console.log(informacoesPessoais)
console.log(typeof(informacoesPessoais))
// Questão 2: Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
let primeiroFilme = {
filme: "Batman Begins",
dataDeLancamento: 2005
}
let segundoFilme = {
    filme: "Joker",
    dataDeLancamento: 2019
    }
function comparacaoDeFilmes (primeiroFilme, segundaoFilme) {
console.log("O primeiro filme foi lançado antes do segundo?", primeiroFilme < segundaoFilme)
console.log("O primeiro filme foi lançado no mesmo ano do segundo?", primeiroFilme === segundaoFilme)
}
comparacaoDeFilmes(primeiroFilme, segundoFilme)
//Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido. 
function haMaisDaquelaFruta (aindaHaDisponibilidade) {
    aindaHaDisponibilidade.disponibilidade = !aindaHaDisponibilidade.disponibilidade, 
    console.log(aindaHaDisponibilidade)
}
haMaisDaquelaFruta(uva)
