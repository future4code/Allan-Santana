// 01ª Questão 

// a) O primeiro console registrará "a. false"
// b) O segundo registrará "b. false"
// c) O terceiro registará "c. true"
// d) Por fim, o console.log registrará "d. bolean"

// 02ª Questão
// No console será impresso a concatenação entre o primeiro e o segundo numero informado pelo usuário, dado que o programador não especificou que o resultado seria um Number

/* 03ª Questão 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number.primeiroNumero + Number.segundoNumero

console.log(soma)

*/

// Exercício de Escrita de Código

// 01ª Questão

let idadeDoUsuario = prompt ("Informe sua idade.")
let idadeMelhorAmigx = prompt ("Agora informe a idade do seu melhor amigo(a).")
console.log("Sua idade é maior do que a do seu melhor amigo?", Number (idadeDoUsuario) > Number (idadeMelhorAmigx))
console.log ("A diferença de idade entre você e seu melhor amigo(a) é de", idadeDoUsuario - idadeMelhorAmigx)
// // 02ª Questão 
let numeroPar = prompt ("Informe um numero par.")
let resultadoDaDivisãoPorDois = numeroPar % 2
console.log("O resultado da divisão por 2 é:", resultadoDaDivisãoPorDois)
// Qualquer número par inserido terá como diferença 0. Enquanto a inserção de números impares sempre será com resto 1.

// 03ª Questão
let idadeDoUsuarioEmAnos = prompt ("Informe sua idade em anos")
let idadeDoUsuarioEmMeses = Number(idadeDoUsuarioEmAnos) * 12
let quantidadeDeDiasAMaisPorAnoBisexto = idadeDoUsuarioEmAnos / 4
let idadeDoUsuarioEmDias = Number(idadeDoUsuarioEmAnos) * 365 + Number(quantidadeDeDiasAMaisPorAnoBisexto)
let idadeDoUsuarioEmHoras = Number(idadeDoUsuarioEmDias) * 24
console.log("Uma pessoa com", idadeDoUsuarioEmAnos,"anos de vida, viveu por", idadeDoUsuarioEmMeses," meses.")
console.log ("Uma pessoa com", idadeDoUsuarioEmMeses,"meses de vida, viveu por", idadeDoUsuarioEmDias," dias.")
console.log ("Uma pessoa com", idadeDoUsuarioEmDias,"dias de vida, viveu por", idadeDoUsuarioEmHoras," horas.")

// // 04ª Questão
let primeiroValor = prompt ("Favor informar um valor inteiro.")
let segundoValor = prompt ("Agora informe um novo número")
console.log("O primeiro numero é maior que segundo? R:", primeiroValor > segundoValor)
console.log("O primeiro numero é igual ao segundo? R:", primeiroValor == segundoValor)
let restoPrimeiroPeloSegundo = primeiroValor % segundoValor
let restoSegundoPeloPrimeiro = segundoValor % primeiroValor
console.log ("O primeiro numero é divisível pelo segundo? R:", restoPrimeiroPeloSegundo == 0)
console.log ("O segundo numero é divisível pelo primeiro? R:", restoSegundoPeloPrimeiro == 0)

// DESAFIO

// Questão 1: Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
let grausFahrenheit = Number
let grausCelsius = Number
let conversaoDeCelsiusParaFahrenheit = (grausCelsius)*(9/5) + 32
let conversaoDeFahrenheitParaKelvin = (grausFahrenheit - 32)*(5/9) + 273.15
// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

grausFahrenheit = 77
console.log("Questão A: A temperatura de", grausFahrenheit, "Fº em Kelvin é", (grausFahrenheit - 32)*(5/9) + 273.15, "º" )

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
grausCelsius = 80
console.log("Questão B: A temperatura de", grausCelsius, "Cº em Fahrenheit é", (grausCelsius)*(9/5) + 32, "º" )

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

grausCelsius = 30
let celsiusParaFahrenheit = (grausCelsius)*(9/5) + 32
console.log("Questão C: A temperatura de", grausCelsius, "Cº em Fahrenheit é", celsiusParaFahrenheit, "º" )
console.log("Questão C: A temperatura de", grausCelsius, "Cº em Kelvin é", (celsiusParaFahrenheit - 32)*(5/9) + 273.15, "º" )

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

grausCelsius = prompt ("Insira um valor em graus celsius para conversão.")
conversaoDeCelsiusParaFahrenheit = (grausCelsius)*(9/5) + 32
conversaoDeFahrenheitParaKelvin = (conversaoDeCelsiusParaFahrenheit - 32)*(5/9) + 273.15
console.log("O valor de", grausCelsius,"Cº em Fahrenheit é:", conversaoDeCelsiusParaFahrenheit,"Fº.")
console.log("O valor de", grausCelsius,"Cº em Kelvin é:", conversaoDeFahrenheitParaKelvin,"Fº.")

// Questão 2: Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

let quilowattHoraMensal = prompt ("Informe quantos quilowatt-hora foi consumido em determinado mês.")
valorDoQuilowattHora = 0.05
let valorDaContaDeLuz = quilowattHoraMensal * valorDoQuilowattHora
console.log("Nos mês informado, o valor da conta de luza será de R$", valorDaContaDeLuz, ".")

// a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
quilowattHoraMensal = 280
valorDaContaDeLuz = quilowattHoraMensal * valorDoQuilowattHora
console.log("a)", valorDaContaDeLuz)
// b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto
let valorComDesconto = valorDaContaDeLuz * 0.85
console.log("b)", valorComDesconto)

//Questão 3: Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:
// a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
let libraParaGrama = 1 / 0.453592
let pesoEmLibra = 20
console.log(pesoEmLibra, "Lb equivalem a", pesoEmLibra * libraParaGrama, "kg")
