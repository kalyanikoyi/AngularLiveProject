import { Injectable } from '@angular/core';
import { Cart } from '../shared/Cart';
import { CartItem } from '../shared/model/CartItem';
import { food } from '../shared/model/food';
@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart = new Cart();

addToCart(food:food):void{
let cartItem = this.cart.items.find(item => item.foodItems.id === food.id)
if(cartItem){
  this.changeQuantity(food.id , cartItem.quantity +1)
  return;
}
this.cart.items.push(new CartItem(food))
}

removeFromCart(foodId:number){
  this.cart.items = this.cart.items.filter(item =>item.foodItems.id != foodId)
}

changeQuantity(quantity:number , foodId:number){
  let cartItem = this.cart.items.find(item => item.foodItems.id === foodId);
  if(!cartItem) return;
  cartItem.quantity = quantity;
}
getCart():Cart{
  return this.cart;
}
}
