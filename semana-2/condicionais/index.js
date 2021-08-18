// /* EXERCÍCIOS DE INTERPRETAÇÃO
// Questão 1:
// a) O código verifica se o número informado pelo usuário através do prompt é um número par.

// b) Para os números que deixam um resto igual a 0 quando divididos por 2, ou seja, para os números pares.

// c) Os números que tem como resto qualquer valor diferente de 0, ou seja, os números ímpares.

// Questão 2:
// a) O código informa o valor da fruta informada. Caso a fruta informada não seja laranja, maçã, uva ou pêra, o valor default será 5.

// b) O preço da fruta maçã é R$ 2.25

// c) O preço da fruta pêra é R$ 5

// Questão 3:
// a) Perguntando ao usuário para que informe o primeiro número e armazenando o número informado na constante "numero"

// b) Caso seja informado o número 10, o terminal irá imprimir:
// Esse número passou no teste
// Essa mensagem é secreta!!!

// Caso seja informado o número -10, o terminal irá imprimir:

// undefined
// */

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Questão 1: Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

let idadeDoUsuario = Number(prompt("Qual a sua idade?"))

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

if (idadeDoUsuario >= 18) {
    console.log("Você pode dirigir")
}
else {
    console.log("Você não pode dirigir.")
}


// Questão 2: Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

let turnoDeEstudo = prompt("Qual turno você estuda? Responda 'M' para matutino, 'V' vespertino e 'N' para noturno.")

if (turnoDeEstudo.toUpperCase() === "M") {
    console.log("Bom dia!")
}
else if (turnoDeEstudo.toUpperCase() === "V") {
    console.log("Boa tarde!")
}
else if (turnoDeEstudo.toUpperCase() === "N") {
    console.log("Boa noite!")
}

// Questão 3: Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

switch(turnoDeEstudo.toUpperCase()) {
    case "M": 
    console.log("Bom dia!")
    break;
    case "V": 
    console.log("Boa tarde!")
    break;
    case "N": 
    console.log ("Boa noite!")
    break;
}

// // Questão 4: Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

let generoDoFilme = prompt("Qual o genêro do filme?")
let valorDoIngresso = Number(prompt("Qual o valor do ingresso?"))
let ehDoGeneroFantasia = generoDoFilme === "fantasia"
let ingressoAbaixoDe15 = valorDoIngresso < 15


if (ehDoGeneroFantasia && ingressoAbaixoDe15) {
    console.log("Bom filme!")
}
else {
    console.log("Escolha outro filme :(")
}

// // DESAFIOS
// // Questão 1: Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.


let generoDoFilme2 = prompt("Qual o genêro do filme?")
let valorDoIngresso2 = Number(prompt("Qual o valor do ingresso?"))
let ehDoGeneroFantasia2 = generoDoFilme2 === "fantasia"
let ingressoAbaixoDe152 = valorDoIngresso2 < 15


if (ehDoGeneroFantasia2 && ingressoAbaixoDe152) {
    let lanchinho = prompt("Qual lanchinho você irá comprar? (pipoca, chocolate, doces, etc.)")
    console.log("Bom filme!", `Aproveite o/a seu/sua ${lanchinho}`)
}
else {
    console.log("Escolha outro filme :(")
}

/* Questão 2: Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
- Nome completo;
- Tipo de jogo: IN indica internacional e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar e FI indica final.
- Categoria: pode ser as opções 1,2,3 ou 4;
- Quantidade de ingressos.
O seu sistema deve solicitar estas informações ao usuário, através do prompt . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
*/


let nomeDoUsuario = prompt("Informe seu nome completo.")
let tipoDeJogo = prompt("Informe o tipo de jogo. (doméstico ou internacional)")
let etapaDoJogo = prompt("Informe a etapa do jogo. (SF para semifinais; DT para decisão do terceiro lugar; e FI para final.")
let categoriaDoJogo = Number(prompt("Informe a categoria do jogo.")) - 1
let quantidadeDeIngressosASerComprada = Number(prompt("Informe quantos ingressos você quer comprar."))


let semiFinais = [1320, 880, 550, 220]
let decisaoTerceirao = [660, 440, 330, 170]
let final = [1980, 1320, 880, 330]
let valorUnitario = Number


function valorDoIngresso (etapa){
    switch (etapa){
    case "SF":
        valorUnitario = semiFinais[(categoriaDoJogo)]
        return valorUnitario
    case "DT":
        valorUnitario = decisaoTerceirao[(categoriaDoJogo)]
        return valorUnitario
    case "FI":
        valorUnitario = final[(categoriaDoJogo)]
        return valorUnitario
    default:
        console.log("Etapa do jogo inválida.")
        break;
}
}
valorDoIngresso(etapaDoJogo.toUpperCase())
let valorUnitarioDoIngresso = valorUnitario


let domesticoOuInternacional = tipoDeJogo == "internacional"
console.log(domesticoOuInternacional)

if (domesticoOuInternacional) {

    let conversaoEmDolares = valorUnitarioDoIngresso / 4.10

    let valorTotalDosIngressos = Number(conversaoEmDolares) * Number(quantidadeDeIngressosASerComprada)

    console.log(`Olá, ${nomeDoUsuario}. Você requereu ${quantidadeDeIngressosASerComprada} ingressos da etapa ${etapaDoJogo.toUpperCase()} da categoria ${categoriaDoJogo + 1}. Cada ingresso terá o valor de ${conversaoEmDolares} e o total a ser pago será de ${valorTotalDosIngressos}.`)

} else {
    let valorTotalDosIngressos = valorUnitarioDoIngresso * quantidadeDeIngressosASerComprada
    
    console.log(`Olá, ${nomeDoUsuario}. Você requereu ${quantidadeDeIngressosASerComprada} ingressos da etapa ${etapaDoJogo.toUpperCase()} da categoria ${categoriaDoJogo + 1}. Cada ingresso terá o valor de ${valorUnitarioDoIngresso} e o total a ser pago será de ${valorTotalDosIngressos}.`)
}
