// Questão 1: O primeiro "console.log" irá imprimir "10". Já o segundo, irá imprimir "105"
// Questão 2: Será impresso na tela o resultado "101010"
/* 
Questão 3: 
A variável "p" deveria ser "cargaHorariaDiaria"
A varável "t" deveria ser "salárioDiario"
*/
// Exercício de progamação nº 1
let nome = ""
let idade = 
console.log (typeof nome)
console.log (typeof idade)
// O primeiro foi impresso como tipo "string" em razão do uso de aspas, o que obrigatoriamente torna a variavel uma "string". Já em relação ao "undefined", isso se dá porque não há definição do tipo de variável, podendo ser "number" ou "boolean"
nome = prompt ("qual seu nome?")
idade = prompt ("qual sua idade?")
console.log (typeof nome)
console.log (typeof idade)
// notei que, apesar de ter digitado um número, ele foi considerado como "string" por default.
console.log ("Olá,", nome,", você tem", idade,"anos.")
// Exercício de progamagação nº 2
let acordado = prompt ("você está acordado?")
let almoco = prompt ("você almoçou hoje?")
let fome = prompt ("você ainda está com fome?")
console.log ("você está acordado? -", acordado)
console.log ("você almoçou hoje? -", almoco)
console.log ("você ainda está com fome? -", fome)

// Exercício de progamação nº3
let a = 10
let b = 25
// Aqui faremos uma lógica para trocar os valores
let c = null
c = a
a = b
b = c
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// DESAFIO
/* Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
1. O primeiro número somado ao segundo número resulta em: x.
2. O primeiro número multiplicado pelo segundo número resulta em: y.
*/
let numero1 = prompt ("informe um número inteiro.")
let numero2 = prompt ("agora digite um segundo número inteiro.")
console.log("O primeiro número somado ao segundo número resulta em:", Number (numero1) + Number (numero2))
console.log("O primeiro número multiplicado pelo segundo número resulta em:", Number (numero1) * Number (numero2))
console.log("FIM")
