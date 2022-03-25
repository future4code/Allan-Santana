// Analise a classe `User`. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, email, etc que você quiser) e imprima, no terminal, o id, o nome e o email desse usuário. 

class User {
	private id: string;
	private email: string;
	private name: string;
	private password: string;
	constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log('Chamando o construtor da classe User');
		this.id = id;
		this.email = email;
		this.name = name; 
		this.password = password;
	}   

	public getId(): string {
		return this.id;
	}
  
	public getEmail(): string {
		return this.email;
	}
  
	public getName(): string {
		return this.name;
	}
	public introduceYourself(): string{
		return 'Olá, bom dia!';
	}

	public introduceYourself2(): string{
		return `"Olá, sou ${this.name}. Bom dia!"`;
	}
}

const users = new User('1', 'aaa@aa.com', 'Allan Gilber', '123456');
console.log(users.getId());
console.log(users.getName()); 
console.log(users.getEmail());

// Todas as propriedades são privadas.

// a. *Seria possível imprimir a senha (`password`) atrelada a essa instância?*

// Não. Pois ela é privada e não possui um getter publico.

// b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*

// Apenas uma.

// EXERCÍCIO 2 

// Analise a `Customer`. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje e crie uma instância dessa classe (com as informações que você quiser). Atente-se ao fato de que o `Customer` é uma subclasse (ou classe filha) da classe `User`. Sabemos disso porque há a palavra `extends` na declaração da classe `Customer`; e, em seu construtor, foi usado o `super`.

class Customer extends User {
	public purchaseTotal = 0;
	private creditCard: string;
	constructor(
		id: string,
		email: string,
		name: string,
		password: string,
		creditCard: string
	) {
		super(id, email, name, password);
		console.log('Chamando o construtor da classe Customer');
		this.creditCard = creditCard;
	}
	public getCreditCard(): string {
		return this.creditCard;
	}
}

// A propriedade purchaseTotal é publica e a propriedade creditacard é privada.

const newCustomer = new Customer('2','asdads@asdas.com', 'Allan G', '3214','555555555');

// a. *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?* 

// Apenas uma

// b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*

// Duas vezes, pois é necessário uma nova instancia de user antes de se criar um customer.

// Exercício 3

// Agora, imprima **todas as informações possíveis** da instância que você criou: o id, o nome, o email, o valor total de compra (`purchaseTotal`) e o cartão de crédito (`creditCard`). Perceba que as propriedades públicas da classe pai (`User`) foram "herdadas" pela classe filha (`Customer`).

console.log(newCustomer.getCreditCard());
console.log(newCustomer.getEmail());
console.log(newCustomer.getId());
console.log(newCustomer.getName());
console.log(newCustomer.purchaseTotal);


// a. *Seria possível imprimir a senha (`password`) atrelada a essa instância?* *Por quê?*

// Não. Pois ela é acessível apenas pela filha e não existe um getter relacionado a ela tanto no elemento pai quanto no filho.

// Exercício 4

// Adicione um método público à classe `User`. Esse método deve ter o nome de `introduceYourself`("apresente-se") e deve retornar a mensagem: `"Olá, bom dia!"`. As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, faça com que a instância que você criou para a classe `Customer` chame esse método

console.log(newCustomer.introduceYourself());

// Altere o método que você acabou de criar para que ele imprima a mensagem: `"Olá, sou ${nome do usuário}. Bom dia!"`. Realize os mesmos testes anteriores.

console.log(newCustomer.introduceYourself2());


// POLIMORFISMO

// EXERCÍCIO 1

// Vamos começar analisando a **interface** Client. Ela possui 4 atributos explicados abaixo.

const calculateBill = () =>{
	return 4;
};

export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}



// Comece criando um objeto dessa interface, colocando a tipagem correta. Perceba que você terá que dar uma implementação para o método `calculateBill()`. Por enquanto, implemente de tal forma que sempre retorne `2` (ou qualquer outro número). Imprima todas as informações que forem possíveis no terminal.

const cliente: Client = {
	name: 'Lol',
	registrationNumber: 10,
	consumedEnergy: 1030,
	calculateBill: () =>{
		return 6;
	}
};

console.log(cliente.name);
console.log(cliente.registrationNumber);
console.log(cliente.consumedEnergy);
console.log(cliente.calculateBill());

// a. *Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?*

// Todas foram impressas.



// Exercício 2

// Agora, vamoes ver a classe Place.

export abstract class Place {
	constructor(protected cep: string) {}
	public getCep(): string {
		return this.cep;
	}
}

// Essa classe é abstrata porque está representando um tipo de informação que simplesmente **abstrai** e **armazena** as características em comum de um conjunto de outras classes. Por ser abstrata, não podemos criar uma instância dela. Essa é uma regra da Programação Orientada a Objetos e válida para todas as linguagens.

// a. *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*

// const teste = new Place();
// O erro foi: "Cannot create an instance of an abstract class."


// b. *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*

// Seria necessário retirar a classificação abstract.



// EXERCÍCIO 3

// Esse exercício vai responder melhor a essas três perguntas: 

// 1. *O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)*
// 2. *Por que a `Place` não é uma interface?*
// 3. *Por que a classe `Place` é uma Classe Abstrata?*

// Será um pouco mais longo, mas esperamos que seja esclarecedor.

// Vamos começar lendo três classes. 

// A primeira representa uma casa residencial. Vamos armazenar nela uma variável para representar a quantidade de moradores (`residentsQuantity`)

export class Residence extends Place {
	constructor(
	protected residentsQuantity: number,
	// Refere-se ao número de moradores da casa
	cep: string
	) {
		super(cep);
	}
}

// A segunda é para um comércio. Para ela, vamos adicionar uma propriedade para representar os andares desse lugar comercial (`floorsQuantity`)

export class Commerce extends Place {
	constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar
    cep: string
	) {
		super(cep);
	}
}

// A última é para uma indústria e adicionaremos uma propriedade para guardar a quantidade máquinas de lá (`machinesQuantity`)

export class Industry extends Place {
	constructor(
    protected machinesQuantity: number, 
    // Refere-se à quantidade de máquinas do local 
    cep: string
	) {
		super(cep);
	}
}

const residence = new Residence(5, '31.111-111');
const commerce = new Commerce(3, '31222-222');
const industry = new Industry(8, '31333-333');

console.log(residence.getCep());
console.log(commerce.getCep());
console.log(industry.getCep());


// Exercício 4

// Agora, você vai começar a colocar a mão na massa!

// Crie uma classe para representar um Cliente Residencial (`ResidentialClient`). Ela deve possuir uma propriedade de CPF, que será privada, uma vez que o CPF não pode mudar e não teremos uma classe filha da `ResidentialClient` (assim, `protected` não faz sentido). Crie o getter também.

// Essa classe deve ser **filha** da classe `Residence` e implementar a classe `Client`. Lembre-se que a classe deve implementar todos métodos e atribuir valores a todas as propriedades que herda da interface. No caso das residências, o valor da conta é **(quantidade de energia) x 0.75.**

export class ResidentialClient extends Residence implements Client{
	constructor( 
		private cpf: string,
		public name: string,
		public registrationNumber: number, 
		public consumedEnergy: number, 
		
		residentsQuantity: number,
		cep:string
	)
	{
		super(residentsQuantity, cep);
		this.cpf = cpf;
	}

	getCpf(): string{
		return this.cpf;
	}
	calculateBill(): number{
		return this.consumedEnergy * 0.75;
	}
}

// a. *Que métodos e propriedades essa classe possui? Por quê?*

// Ela possui todos as propriedades da interface Client e da classe Residence. Os metodos que ele possui são o próprio do cpf e o calculatebill da interface.




// Exercício 5

// Crie a classe `CommercialClient` para representar o Cliente Comercial. Ele deve possuir um CNPJ (privado). Crie os getter dela.

// Essa classe deve ser **filha** da classe `Commerce` e implementar a interface `Client`. Nesse caso, o valor da conta é **(quantidade de energia) x 0.53.**

export class CommercialClient extends Commerce implements Client{
	constructor( 
		private CNPJ: string,
		public name: string,
		public registrationNumber: number,
		public consumedEnergy: number,
		public floorsQuantity: number,
		public cep: string
	){
		super(floorsQuantity, cep);
	}

	calculateBill():number{
		return this.consumedEnergy* 0.53;
	}
	getCnpj(): string{
		return this.CNPJ;
	}
}

// a. *Quais as semelhanças dessa classe com a `ResidentialClient`?*

// Ambas herdam as propriedades da interface Client

// b. *Quais as diferenças dessa classe com a `ResidentialClient`?*

// A classe ComercialClient recebe as propriedades da classe commerce




// Exercício 6

// Agora, crie a classe `IndustrialClient` para representar o Cliente Industrial. Ele deve possuir um um número de registro industrial (privada). Crie somente os getters dela.

export class IndustrialClient {
	constructor(public industrialRegisterNumber: string){}

	getIndustrialNumber(): string{
		return this.industrialRegisterNumber;
	}
}

// a. *De* q*ual classe a `IndustrialClient` deve ser filha? Por quê?*

// Da classe industry, pois ela será um desdobramento dela.


// b. *Que interface a `IndustrialClient` implementa? Por quê?*

// A do Client, pois ela é um tipo de cliente.

// c. *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*

// Sendo ela filha da classe Industry e com a interface Cliente, ela herdará todas as demais propriedades/getters.

