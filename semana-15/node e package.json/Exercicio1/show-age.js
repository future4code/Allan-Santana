/* Questão 1
a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
*/

// Para acessar os parâmetros recebidos pelo node, devemos digitar "process.argv[argument]" sendo o 'indice' o numero do índice do parâmetro. Devendo ser sempre lembrado que os dois primeiros índices são preenchidos por padrão com a localização do node e o arquivo principal.

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura: "Olá, (Nome)! Você tem (sua idade) anos."

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.


const nameInput = process.argv[2] && process.argv[2]
const ageInput = process.argv[3] && process.argv[3]

if(process.argv[2] && process.argv[3]){
    console.log("\x1b[33m", `Olá, ${nameInput}! Você tem ${ageInput} anos.`, '\x1b[0m')
    console.log(`Olá, ${nameInput}! Você tem ${ageInput} anos. Em sete anos você terá ${Number(ageInput) + 7}`, '\x1b[0m')
}else{
    console.log('\x1b[31m', "Insuficient paramters.", '\x1b[0m');
}

