// Durante a aula de hoje, vimos que os arquivos escritos em Typescript, com sua extensão `.ts`, passam por um processo para que possam ser lidos e executados. Este processo é chamado de **transpilação**. Fazendo isso, o código será transformado em Javascript e assim poderá ser lido e interpretado.

// Sabendo disso, vamos entender um pouco melhor o processo de **transpilação**.

// Durante a aula, a biblioteca `typescript` foi instalada

// npm install typescript -g ## -g ou --global para indicar indicação global

// Com isso temos acesso ao comando `tsc` no terminal. O tsc é o comando responsável por fazer a transpilação dos arquivos.

// Abaixo, há um exemplo de código escrito em Typescript. Crie um arquivo com este código chamado `exercicio-4.ts` e use comentários para responder as questões.

// a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// basta executar o comando "tsc 'nome do arquivo'" no bash estando na pasta do arquivo com o tsconfig.json.

// b) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças.

// Seria necessário acrescentar um ""./src" antes do nome do arquivo

// c) Existe alguma maneira de **transpilar** múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// basta digitar tsc sem indicar nome do arquivo estando na pasta que contenha os arquivos '.ts'

