import { Transaction } from './types';


// Analise a classe `UserAccount` abaixo. Perceba quais propriedades são públicas e quais são privadas e responda as perguntas discursivas em comentários no arquivo `index.ts`


// a*) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*

// Um construtor irá iniciar a classe. Ele é responsável por realizar tarefas no inicio da criação da classe.


// b*) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*

// Uma única vez.

// c*) Como conseguimos ter acesso às propriedades privadas de uma classe?*

// Apenas na própria classe e por meio do "this"


export class UserAccount {

	private cpf: string; // privada
	private name: string; // privada
	private age: number; // privada
	private balance = 0; // privada
	private transactions: Transaction[] = []; // privada
	constructor(
		cpf: string,
		name: string,
		age: number,
	) {
		console.log('Chamando o construtor da classe UserAccount');
		this.cpf = cpf;
		this.name = name;
		this.age = age;
	}

	getAccounts(): [age: number, balance: number, cpf: string, name: string, transaction: Transaction[] ] {
		return [this.age, this.balance, this.cpf, this.name, this.transactions];
	}

}


// Transforme a variável de tipo abaixo, chamada `Transaction` em uma classe `Transaction`. Ela deve conter as mesmas propriedades: *data*, *valor* e *descrição*. Agora, porém, todas elas devem ser **privadas**. Portanto, crie métodos (*getters*) para a leitura desses valores, tanto para essa classe quanto para a classe UserAccount. Crie uma instância dessa classe e adicione à instância já criada de UserAccount

// export class Transaction {
//    description: string;
//    value: number;
//    date: string;

//    constructor(
//       description: string,
//       value: number,
//       date: string
//    ) {
//       console.log("Chamando o construtor da classe UserAccount")
//       this.description = description;
//       this.date = date;
//       this.value = value
//    }
// }


// Exercício 3

// Crie uma classe **Bank**, que será responsável por guardar todos os dados da aplicação. Ela deve possuir a propriedades *accounts*, privada (crie os *getters* e *setters* que achar apropriado).

export class Bank {
	private accounts: UserAccount[];
	constructor(accounts: UserAccount[]){
		this.accounts = accounts;
	}

	public getAccounts(): void{
		console.log('This are the accounts: ', this.accounts);
	}
}