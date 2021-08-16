// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = prompt("Digite a altura do seu retângulo.")
let largura = prompt("Digite a largura do seu retângulo.")
console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Em que ano estamos?")
  let anoDeNascimento = prompt("Em que ano você nasceu?")
  console.log(anoAtual - anoDeNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return(peso / (altura ** 2))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome = prompt("Escreva seu nome completo.")
  let idade = prompt ("Qual sua idade?")
  let email = prompt("informe seu e-mail.")
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
 let cor1 = prompt("Informe uma de suas cores favoritas.")
 let cor2 = prompt("Agora Informe uma segunda cor favorita.")
 let cor3 = prompt("Agora Informe uma terceira cor favorita.")
let array = [cor1, cor2, cor3]
console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
        return string.toUpperCase()
 
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let lucro = (custo / valorIngresso)
return(lucro)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let possuemOMesmoTamanho = string1.length === string2.length
console.log(possuemOMesmoTamanho)
return(possuemOMesmoTamanho)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return(array[0])
  
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return(array.pop())
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let UltimoElemento = array.pop()
  let primeiroElemento = array.shift()
  array.unshift(UltimoElemento)
  array.push(primeiroElemento)
  console.log(array)
return(array)
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
let checarIgualdadeDoTexto = string1.toLowerCase() === string2.toLowerCase()
return checarIgualdadeDoTexto
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
let anoAtual = prompt("Em que ano estamos?")
let anoDeNascimento = prompt("Em qual ano a pessoa dona do RG nasceu?")
let anoDeEmissaoDoRG = prompt("Qual a data de emissão do RG dela?")
let idadeDaPessoa = anoAtual - anoDeNascimento
let tempoDeEmissaoDoRG = anoAtual - anoDeEmissaoDoRG
let renovacaoJovem = (idadeDaPessoa <= 20) && (tempoDeEmissaoDoRG >= 5)
let renovacaoAdulto = ((idadeDaPessoa > 20) && (idadeDaPessoa <= 50) && (tempoDeEmissaoDoRG >= 10))
let renovacaoIdoso = (idadeDaPessoa > 50) && (tempoDeEmissaoDoRG >= 15)
let devoRenovar = renovacaoJovem || renovacaoAdulto || renovacaoIdoso
console.log(devoRenovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  //- **São bissextos** todos os anos múltiplos de 400**.**
//**São bissextos** todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400**.**
  let multiploDe400 = (ano % 400) === 0
  let multiploDe4 = (ano % 4 === 0) && !((ano % 100 === 0) && !(multiploDe400))
  let ehBisexto = multiploDe400 || multiploDe4
  console.log(ehBisexto)
return ehBisexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idadeDoUsuario = prompt("Você possui mais de 18 anos?")
  let ensinoMedioCompleto = prompt("Vocês possui ensino médio completo?")
  let disponibilidadeDeHorarios = prompt("Você possui disponibilidade exclusiva durante o horário do curso?")
idadeDoUsuario = idadeDoUsuario.includes("sim")
ensinoMedioCompleto = ensinoMedioCompleto.includes("sim")
disponibilidadeDeHorarios = disponibilidadeDeHorarios.includes("sim")
console.log(idadeDoUsuario && ensinoMedioCompleto && disponibilidadeDeHorarios)

}