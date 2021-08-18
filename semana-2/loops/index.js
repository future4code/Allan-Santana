/* INTERPRETAÇÃO DE CÓDIGO
Questão 1:
O loop quando executado irá adicionar "+1" ao valor de "i" o qual será acrescido ao valor da variável "valor". Esse loop se repetirá até chegar ao valor de "i" como 5. Finalizado os loops, será impresso no console o valor 5.


Questão 2:
a) Todos os números menores de 18, ou seja, 10, 11, 12 e 15.
b) Sim, desde que fosse adicionado um "(lista.indexOf(numero))" após o "console.log".


Questão 3:

R: ****

*/


/*QUESTÕES DE ESCRITA
Questão 1: Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
c) Por fim, imprima o array com os nomes dos bichinhos no console
*/


let bichosDeEstimacao = Number(prompt("Quantos bichos de estimação você tem?"))

let nomesDosBichos = []

function devoAdotar (quantidadeDeBichos) {
    if (quantidadeDeBichos <= 0){
        console.log("Que pena! Você pode adotar um pet.")  
}   else {
        for (let i = 0; i < quantidadeDeBichos; i++){
        if (i <= quantidadeDeBichos){
        let digaONomeDeUmBicho = (prompt("Digite o nome de um dos seus bichos."))
        nomesDosBichos.push(digaONomeDeUmBicho)
}
}
}
}

devoAdotar(bichosDeEstimacao)

console.log(nomesDosBichos)


// Questão 2: Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
// a) Escreva um programa que **imprime** cada um dos valores do array original.


let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function valoresDoArray (array, arrayLength) {
    for (let i = 0; i < arrayLength; i++){
        let spreadArray = array
         let elementoASerTrabalhado = spreadArray.shift()
         console.log(elementoASerTrabalhado)
    }
}

valoresDoArray(arrayOriginal, arrayOriginal.length)


// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let arrayBackup = []

function valoresDivididosPor10 (array, arrayLength) {
    for (let i = 0; i < arrayLength; i++){
         let elementoASerTrabalhado = array.shift()
         let valorDividido = Number(elementoASerTrabalhado) / 10
         console.log(valorDividido)
    }
}

valoresDivididosPor10(arrayOriginal, arrayOriginal.length)


// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

let arrayOriginal3 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayBackup2 = []


function somenteNumerosPares (array, arrayLength) {
    for (let i = 0; i < arrayLength; i++){
         let elementoASerTrabalhado = array.shift()
         let ehNumeroPar = (Number(elementoASerTrabalhado) % 2) == 0
         if (ehNumeroPar === true){
            arrayBackup2.push(elementoASerTrabalhado)
         }
    }
}

somenteNumerosPares (arrayOriginal3, arrayOriginal3.length)

arrayOriginal3 = arrayBackup2

console.log(arrayOriginal3)

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

let arrayOriginal4 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayBackup4 = []


function informeOIndexENumero (array, arrayLength) {
    let spreadArray = [...array]
    for (let i = 0; i < arrayLength; i++){
         let elementoASerTrabalhado = spreadArray.shift()
         arrayBackup4.push(`O elemento do índex ${arrayOriginal4.indexOf(elementoASerTrabalhado)} é ${elementoASerTrabalhado}`)
    }
}


informeOIndexENumero(arrayOriginal4, arrayOriginal4.length)
console.log(arrayBackup4)


// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original


let arrayOriginal6 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let menorNumero = [arrayOriginal6[0]]
let maiorNumero = [arrayOriginal6[0]]

function maiorEMenorNumero (array, arrayLength) {
    for (let i = 0; i < arrayLength; i++){
        let spreadArray = array
        let elementoASerTrabalhado = spreadArray.shift()
         if (elementoASerTrabalhado <= menorNumero){
            menorNumero = elementoASerTrabalhado
        } else if (elementoASerTrabalhado >=  maiorNumero){
            maiorNumero = elementoASerTrabalhado
         }
    }
}

maiorEMenorNumero (arrayOriginal6, arrayOriginal6.length)

console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}.`)
