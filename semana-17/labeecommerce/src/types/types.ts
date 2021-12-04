// import { type } from "os";

export type user = {
    id: string, 
    name: string, 
    email: string, 
    password: string
}

export type product = {
    id: string,
    name: string,
    price: number,
    image_url: string
}

export type purchaseBody = {
    user_id: string,
    product_id: string,
    quantity: number
}