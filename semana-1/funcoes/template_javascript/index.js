/* Questão 1:
a)  O que vai ser impresso no console? R: 10 e 50
b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console? R: os resultados ficariam alocados na memória sem que fossem exibidos no console.
Questão 2:
a) Explique o que essa função faz e qual é sua utilidade. R: A utilidade da função "outraFuncao" é transformar as letras da razão inserida em minúsculas e verifica se há a palavra "cenoura" no texto, retornando verdadeiro/falso. seu único parâmetro é o "texto".
b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
i. Eu gosto de cenoura
R: o console irá retornar "eu gosto de cenoura, true"
ii. CENOURA é bom pra vista
R: o console irá retornar "cenoura é bom pra vista, true"
iii. Cenouras crescem na terra
R: o console irá retornar "cenouras crescem na terra, true"
*/
// Questão 1: Escreva as funções explicadas abaixo:
// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
function meusDados(){
    console.log("Eu sou Allan, tenho 27 anos e moro em Belo Horizonte e sou estudante.")
}
// // b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
let nome = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade?")
let endereco = prompt("Qual sua cidade?")
let profissao = prompt("Qual sua profissão?")
let informacoesDadasPeloUsuario = function informacoesDoUsuario (nome, idade, endereco, profissao){
console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
}
informacoesDadasPeloUsuario(nome, idade, endereco, profissao)
// Questão 2: Escreva as funções explicadas abaixo:
// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
function soma(numero1, numero2) {
    let numero1o = prompt("Informe um número.")
    let numero2o = prompt ("Informe um segundo número")
    let resultado = Number (numero1o) + Number(numero2o)
    console.log(resultado)
}
soma()
// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function primeiroMaiorQueSegundo() {
    let numero1o = prompt("Informe um número.")
    let numero2o = prompt ("Informe um segundo número")
    let resultado = Number (numero1o) >= Number(numero2o)
    console.log(resultado)
}
primeiroMaiorQueSegundo()
// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
function ehNumeroPar() {
    let numero1o = prompt("Informe um número.")
    let resultado = ((Number (numero1o) % 2)  === 0)
    console.log(resultado)
}
ehNumeroPar()
// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
function tamanhoDaString(string) {
    let frase = prompt("Digita uma frase.")
    let resultado = frase.toUpperCase()
    console.log(resultado, resultado.length)
}
tamanhoDaString()
// Questão 3: Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
function somaSubstraiMultiplicaDivide(numero1, numero2){
    let numero1o = prompt("Informe um número.")
    let numero2o = prompt("Informe um segundo número.")
    let adicao = Number(numero1o) + Number(numero2o)
    let subtrai = Number(numero1o) - Number(numero2o)
    let multiplica = Number(numero1o) * Number(numero2o)
    let divide = Number(numero1o) / Number(numero2o)
    console.log(adicao, subtrai, multiplica, divide)
}
somaSubstraiMultiplicaDivide()
//DESAFIOS
// Questão 1: Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
// a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
let parametro1 = (parametro) =>{
    console.log(Number(parametro))
    
}

// b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo
let somaDosParametros = () =>{
    let parametro1o = prompt("Insira um parâmetro.")
    let parametro2o = prompt("Insira um segundo parâmetro.")
    let soma = Number(parametro1o) + Number(parametro2o)
    parametro1(soma)
}
somaDosParametros()
//Questão 2: Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 

function teoremaDePitagoras (cateto1, cateto2) {
    let cateto1o = prompt("Informe o valor do primeiro cateto.")
    let cateto2o = prompt("Informe o valor do segundo cateto.")
    let hipotenusa = (Number(cateto1o) * Number(cateto1o)) + (Number(cateto2o) * Number(cateto2o))
    let raizQuadradaDaHipotenusa = Math.sqrt (hipotenusa)
    console.log(raizQuadradaDaHipotenusa)
    }

teoremaDePitagoras()