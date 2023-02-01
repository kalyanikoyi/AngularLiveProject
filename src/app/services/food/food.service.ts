import { Injectable } from '@angular/core';
import { food } from 'src/app/shared/model/food';
import { Tags } from 'src/app/shared/model/Tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
getFoodById(id:number):food{
  return this.getAll().find(food => food.id == id)!;
}
  getAllByTags(tag:string):food[]{
   return tag == 'All'? this.getAll() : this.getAll().filter(food=> food.tags?.includes(tag))
    
  }
  getAllTags():Tags[]{
    return [
      {name :'All',count:8},
      {name :'Pizza',count:1},
      {name :'Lunch',count:6},
      {name :'Fastfood',count:4},
      {name :'Tiffin',count:1},
      {name :'sea-food',count:1},
      {name :'Sweet',count:1},
      {name :'Biryani',count:1},
      
    ]
  }

  getAll():food[]{
    return [
      {
        id:1,
        name:'Burger',
        price:100,
        cookTime : '40-50',
        favorite:false,
        origins:['Italy'],
        imageUrl:'./assets/burger.jpg',
        tags:['Fastfood','Burger','Lunch']
       },
       {
        id:2,
        name:'Chicken tikka',
        price:300,
        cookTime : '40-50',
        favorite:true,
        origins:['Italy'],
        imageUrl:'./assets/chicken tikka.jpg',
        tags:['Fastfood','Chicken tikka','Lunch']
       },
       {
        id:3,
        name:'Dosa',
        price:100,
        cookTime : '10',
        favorite:true,
        origins:['Indian'],
        imageUrl:'./assets/dosa.jpg',
        tags:['Tiffin','Dosa','Break fast']
       },
       {
        id:4,
        name:'Fish fry',
        price:300,
        cookTime : '40-50',
        favorite:true,
        origins:['Indian'],
        imageUrl:'./assets/fish fry.jpg',
        tags:['sea-food','Fish fry','Lunch']
       },
       {
        id:5,
        name:'Jilebi',
        price:50,
        cookTime : '30',
        favorite:false,
        origins:['Indian'],
        imageUrl: './assets/jilebi.jpg',
        tags:['Sweet','Jilebi','Lunch']
       },
       {
        id:6,
        name:'Pizza',
        price:300,
        cookTime : '40-50',
        favorite:true,
        origins:['Chinese'],
        imageUrl:'./assets/pizza.jpg',
        tags:['Fastfood','Pizza','Snack']
       },
       {
        id:7,
        name:'Samosa',
        price:300,
        cookTime : '30',
        favorite:false,
        origins:['Indian'],
        imageUrl:'./assets/samosa.jpg',
        tags:['Fastfood','samosa','Lunch']
       },
       {
        id:8,
        name:'Biryani',
        price:250,
        cookTime : '60',
        favorite:true,
        origins:['Hyderabadi'],
        imageUrl:'./assets/biryani.jpg',
        tags:['south','Biryani','Lunch']
       }
    ]
  }
}
