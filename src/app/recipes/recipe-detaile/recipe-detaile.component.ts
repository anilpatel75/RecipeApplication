import { RecipeService } from './../recipe.service';

import { Component, OnInit , Directive } from '@angular/core';
import {Recipe} from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';




@Component({
  selector: 'app-recipe-detaile',
  templateUrl: './recipe-detaile.component.html',
  styleUrls: ['./recipe-detaile.component.css']
})
export class RecipeDetaileComponent implements OnInit {
   recipe: Recipe;
    id: number;

  constructor(private route:ActivatedRoute ,
     private RecipeService:RecipeService,private router: Router) { }

  ngOnInit() {
   this.route.params.subscribe(
     (params: Params) =>{
     this.id = +params['id'],
     this.recipe = this.RecipeService.getRec(this.id)
     });
}
  onEditRecipe()
  {
    this.router.navigate(['edit'] , {relativeTo:this.route});
  }
}
