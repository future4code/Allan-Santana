/* Exercício 3
Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.
 */

const taskList = ['limpar', 'varrer', 'caminhar']
const newTask = process.argv[2]

taskList.push(process.argv[2])
console.log("\x1b[33m", taskList, '\x1b[0m')