// 1) Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
// a) a. undefined
// b) b. null
// c) c. 11
// d) d. 0
// e) e. 19
// f) f. undefined
// 2) QUESTÃO 2:
// Resposta: o console irá imprimir a frase "SUBI NUM ÔNIBUS EM MIRROCOS 27"
// Exercícios de escrita de código
// // 1) Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
let emailDoUsuario = prompt ("digite o seu e-mail")
let nomeDoUsuario = prompt ("digite o seu nome")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario}!`)
// 2) Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
let comidasFavoritas = ["lasanha", "pizza", "tropeiro", "estrogonoff", "batata frita"]
// a) Imprima no console o array completo
console.log (comidasFavoritas)
// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
console.log(`Essas são as minhas comidas preferidas: ${comidasFavoritas}`)
// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
let comidaFavoritaDoUsuario = prompt("Qual sua comida favorita?")
comidasFavoritas.splice(1, 1, comidaFavoritaDoUsuario)
console.log(comidasFavoritas)
// Questão 3) Faça um programa, seguindo os passos:
// a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
let listaDeTarefas = []
// // b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
let primeiraTarefa = prompt ("Informe a primeira tarefa que você precisa realizar hoje.")
let segundaTarefa = prompt ("Informe a segunda tarefa que você precisa realizar hoje.")
let terceiraTarefa = prompt ("Informe a terceira tarefa que você precisa realizar hoje.")
listaDeTarefas.push(primeiraTarefa,segundaTarefa,terceiraTarefa)
// c) Imprima o array no console
console.log(listaDeTarefas)
// d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
let tarefaRealizada = prompt('Informe o índice de uma tarefa que você realizou, devendo a primeira tarefa ser considerada como "0".')
// e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(tarefaRealizada, 1)
// // f) Imprima o array no consoleImprima no console
console.log(listaDeTarefas)
// DESAFIOS
// 1) Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
let fraseDoUsuario = prompt ("Favor informar uma frase.")
let array2 = fraseDoUsuario.split(" ")
console.log(array2)
// 2) 2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let kdOAbacaxi = array.indexOf("Abacaxi")
console.log(kdOAbacaxi, array.length)
