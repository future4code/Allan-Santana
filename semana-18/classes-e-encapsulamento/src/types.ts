export enum GENDER {
   MALE = 'MALE',
   FEMALE = 'FEMALE',
   OTHER = 'OTHER'
}

export type character = {
   name: string,
   gender: GENDER,
   id?: number,
   description?: string
}

export class Transaction {
	private description: string;
	private value: number;
	private date: string;

	constructor(
		description: string,
		value: number,
		date: string
	) {
		console.log('Chamando o construtor da classe UserAccount');
		this.description = description;
		this.date = date;
		this.value = value;
	}

	getTransactionData(): void {
		console.log(
			this.description,
			this.value,
			this.date);
	}
}