import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchItem=''

constructor( private activatedRoute:ActivatedRoute ,private router :Router){
  this.activatedRoute.params.subscribe((params)=>{
    if(params['searchItem'])
    this.searchItem = params['searchItem']
  })
}
ngOnInit(): void {
}
search():void{
    if(this.searchItem)
    this.router.navigateByUrl('/search/' + this.searchItem)
}
}
