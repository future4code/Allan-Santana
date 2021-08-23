// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let tamanhoDoArray = array.length
  let arraytemporario = []
  for (i = 0; i < tamanhoDoArray; i++){
    let retiradaDoElemento = array.pop()
    arraytemporario.push(retiradaDoElemento)
    }
    return arraytemporario
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let arrayBackup = array
  let arrayLength = array.length
  let ordemCrescente = []
  let y = 0
  while(y < array.length){
  let numero = arrayBackup.shift
  ordemCrescente.push(menorNumeroDoArray(numero))
  y++}

  function menorNumeroDoArray(array2){
    let menorNumero = 0
  for(i = 0; i < arrayLength.length; i++){
     if (menorNumero < array2[i])
     menorNumero = numero
     }
     return menorNumero
    }
  }

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayBackup = array
    let arrayLength = array.length
    let arrayPares = []
    console.log(arrayLength)
    for(i = 0; i < arrayLength; i++){
        let numero = arrayBackup.shift()
        if (numero % 2 === 0){
            arrayPares.push(numero)            
        }
    }
    return arrayPares
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayBackup = array
    let arrayLength = array.length
    let arrayPares = []
    console.log(arrayLength)
    for(i = 0; i < arrayLength; i++){
        let numero = arrayBackup.shift()
        if (numero % 2 === 0){
            arrayPares.push(numero ** 2)            
        }
    }
    return arrayPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
  for(i = 0; i < array.length; i++){
     if (maiorNumero < array[i])
     maiorNumero = array[i]
     }
     return maiorNumero  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let array = [num1, num2]
    let maior = num1
    let menor = num1
   

    for(i = 0; i < array.length; i++){
       if (array[i] > maior)
       maior = array[i]
       }

    for(i = 0; i < array.length; i++){
        if (array[i] < menor)
        menor = array[i]
        }



let diferencaDosDois = maior - menor
let divisivel = maior % menor == 0
let objeto = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: divisivel, 
    diferenca: diferencaDosDois}
       return objeto

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = []
    let ultimoNumeroParLocalizado = 0

    for (i = 0; i < n; i++){
       if (i === 0){
       array.push(0)
    } else {
        let numero = ultimoNumeroParLocalizado + 2
        ultimoNumeroParLocalizado = numero
        array.push(numero)
       }    
   }

   return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if ((ladoA === ladoB) && (ladoA === ladoC)){
return "Equilátero"

} if ((ladoA !== ladoB) && (ladoA !== ladoC) && (ladoB !== ladoC)){ 
return "Escaleno"
} else{
    return "Isósceles"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayBackup = array
    let maior = array[0]
    let menor = array[0]

    

    for(i = 0; i < array.length; i++){
       if (array[i] > maior)
       maior = array[i]
       }

    for(i = 0; i < array.length; i++){
        if (array[i] < menor)
        menor = array[i]
        }

    let arrayParaCalcularSegundoMenor = arrayBackup.filter(retirarOMenor(menor))

    let segundoMaior = maior
    let segundoMenor = menor

    function retirarOMenor (number){
        let numeroASerRetirado = []
        if (number !== menor)
        return number}

    for(i = 0; i < arrayParaCalcularSegundoMenor.length; i++){
            if (arrayParaCalcularSegundoMenor[i] < segundoMenor)
            segundoMenor = arrayParaCalcularSegundoMenor[i]
        }


let retorno = [segundoMenor, segundoMaior]
       return retorno 
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa.nome = "ANÔNIMO"
    return pessoa 
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let objeto = pessoas.filter(quemPodeEntrar)

   function quemPodeEntrar(pessoa){
       let alturaMinima = pessoa.altura > 1.5
       let idadeMinima = pessoa.idade > 14
       let idadeMaxima = pessoa.idade < 60
       let podeEntrar = alturaMinima && idadeMaxima && idadeMinima
        return podeEntrar       
   }
   return objeto
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let objeto = pessoas.filter(quemNaoPodeEntrar)

    function quemNaoPodeEntrar(pessoa){
        let alturaMaxima = pessoa.altura > 1.5
        let idadeMinima = pessoa.idade > 14
        let idadeMaxima = pessoa.idade < 60
        let naoPodeEntrar = alturaMaxima && idadeMaxima && idadeMinima
         return !naoPodeEntrar       
    }
    return objeto
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas){
let backupDoObjeto = [...contas]
let arraySpread = [...contas]

for (i = 0; i < contas.length; i++){
let valoresgastos = backupDoObjeto[i].compras

console.log(valoresgastos)

let total = 0

for (i = 0; i < valoresgastos.length; i++){

let valor = valoresgastos[i]

total = valor + total

}

let saldoEmConta = total - backupDoObjeto[i].saldoTotal

let dadosDoObjeto = {...backupDoObjeto[i], saldoTotal: saldoEmConta, compras:[]}

console.log(dadosDoObjeto)}

return dadosDoObjeto
}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

function comparar(a, b){
    if(a.nome < b.nome){
        return -1
    }
}
console.log(consultas)
comparar(consultas)

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
}