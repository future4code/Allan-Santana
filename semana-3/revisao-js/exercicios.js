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
  
  let ordemCrescente = array.sort(function (a, b){
      return a - b
      
  })
  return ordemCrescente
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

    let comparar = (a, b) => a > b ? 1 : -1

        let arrayOrdenado = array.sort(comparar)
        let segundoMenor = arrayOrdenado[1]
        let segundoMaior = arrayOrdenado[arrayOrdenado.length - 2]
        return [segundoMaior, segundoMenor]

    
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

let somar = (valor1, valor2) => valor1 + valor2

contas.forEach(contas => {

    let gastos = contas.compras.reduce(somar, 0)

    contas.saldoTotal -= gastos

    contas.compras = []
})

return contas

}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

let comparar = (a, b) => a.nome > b.nome ? 1 : -1

return consultas.sort(comparar)

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
}