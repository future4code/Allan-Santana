// export class Users {
// 	constructor(
// 		private id: string,
// 		private email: string,
// 		private userName: string,
// 		private password: string
// 	){
// 		this.id = id,
// 		this.email = email,
// 		this.userName = userName,
// 		this.password = password;
// 	}
// }

// export class Customer extends Users{
// 	constructor(
//         public creditCard: number,
//         public purchaseAmount: number,
//         id: string,
//         email: string,
//         userName: string,
//         password: string
// 	){
// 		super(id, email, userName, password);
// 		this.creditCard = creditCard;
// 		this.purchaseAmount = purchaseAmount;
		
// 	}
// }

// export class Employees extends Users{
// 	constructor(
//         public salary: number,
//         id: string,
//         email: string,
//         userName: string,
//         password: string
// 	){
// 		super(id, email, userName, password);
// 		this.salary = salary;
// 	}
// }

// export class Sellers extends Employees{
// 	constructor(
//         public numberOfSales: number,
//         salary: number,
//         id: string,
//         email: string,
//         userName: string,
//         password: string
// 	){
// 		super(salary, id, email, userName, password);
// 		this.numberOfSales = numberOfSales;
// 	}
// }