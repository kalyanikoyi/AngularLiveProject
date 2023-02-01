import { food } from "./food";

export class CartItem{
    constructor(foodItems:food){
        this.foodItems = foodItems;
        this.price;
    }
    foodItems :food;
    quantity : number=1;
    get price(): number{
    return this.foodItems.price * this.quantity
    }
}