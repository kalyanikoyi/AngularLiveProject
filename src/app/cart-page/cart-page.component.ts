import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/Cart';
import { CartItem } from '../shared/model/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService :CartService,
    ){
    this.setCart()
  }
setCart(){
  this.cart = this.cartService.getCart();
}
removeFromCart(cartItem :CartItem){
  this.cartService.removeFromCart(cartItem.foodItems.id);
  this.setCart();
}
changeQuantity(cartItem:CartItem, quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.foodItems.id,quantity);
  this.setCart();
}
}
