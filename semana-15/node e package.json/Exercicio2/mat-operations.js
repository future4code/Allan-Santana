/* Questão 2
Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos. 
 */

const operation = process.argv[2]
const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])

if(firstNumber && secondNumber && operation){
    switch(operation){
        case 'add':{
            console.log(firstNumber + secondNumber)
        }
        break;
        case 'sub':{
            console.log(firstNumber - secondNumber)
        }
        break;
        case 'mult':{
            console.log(firstNumber * secondNumber)
        }
        break;
        case 'div':{
            console.log(firstNumber / secondNumber)
        }
        break;
        default: {
            console.log("\x1b[33m", "Unknow operation argument, please choose between: 'add, sub, mult, div'", '\x1b[0m')
        }
    }
}else{
    console.log('\x1b[31m', "Insuficient paramters.", '\x1b[0m');
}
