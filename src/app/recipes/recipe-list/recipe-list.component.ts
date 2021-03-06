import { Routes } from '@angular/router';
import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],

})
export class RecipeListComponent implements OnInit {
   recipes: Recipe[];
    constructor(private recipeService: RecipeService,
    private route:ActivatedRoute,
    private router:Router) { }

   ngOnInit()
    {
       this.recipes = this.recipeService.getReciepe();
       this.recipeService.reciepeAdded.subscribe(
                   (recipe)=>{
                    this.recipes = recipe;
                  })
                  console.log(this.recipes)
    }
    onSelected()
    {
      this.router.navigate(['new'],{relativeTo: this.route} );
    }
}
