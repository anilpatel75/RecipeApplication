import { Component, OnInit,  } from '@angular/core';
import {Recipe} from './recipe.model';
import { RecipeService } from './recipe.service';
import { fadeInAnimation } from '../animation';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
   providers:[RecipeService], 
   
   
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeServce: RecipeService) { }

  ngOnInit() {
    this.recipeServce.reciepeAdded.subscribe(
      (recipe: Recipe) =>
      {
         this.selectedRecipe = recipe;
      }
    )

  }

}
