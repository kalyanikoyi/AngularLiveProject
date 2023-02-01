import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tags } from '../shared/model/Tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  @Input() foodPageTags?:string[];
  @Input() justifyContent?:string ='center'
tags?:Tags[]=[];

constructor(private foodservice : FoodService){

}
ngOnInit(): void {
  if(!this.foodPageTags)
  this.tags = this.foodservice.getAllTags();
}
}
