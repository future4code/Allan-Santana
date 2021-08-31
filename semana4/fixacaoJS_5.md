``` function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 // Escreva seu código aqui
 function nomesDosBichos (objeto) {
   return objeto.nome
   
 }
let nomesDosAnimais = animais.map(nomesDosBichos)
console.log(nomesDosAnimais)
return nomesDosAnimais
} ```