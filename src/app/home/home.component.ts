import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { food } from '../shared/model/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:food[]=[]

  constructor(private foodService:FoodService , 
    private activatedRoute : ActivatedRoute){

  }
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params)=>{
      if(params['searchItem'])
      this.foods = this.foodService.getAll().filter(foodItems=>foodItems.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      else if(params['tag'])
      this.foods=this.foodService.getAllByTags(params['tag'])
      else this.getAllImages()
    })

  // this.activatedRoute.params.subscribe(params=>{
  //   if(params['searchItem'])
  //     this.foods = this.foodService.getAll().filter(foodItems =>foodItems.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
    
  //   else  this.getAllImages()
  // })
   
  }

  getAllImages(){
this.foods=this.foodService.getAll()
  }
}
