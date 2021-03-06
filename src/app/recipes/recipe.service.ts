import { Subject } from 'rxjs/Subject';
import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
export class RecipeService
{
    reciepeAdded = new EventEmitter<Recipe[]>();
    editRecipe = new Subject<number>();


    public recipes: Recipe[] =[
        new Recipe('Recipe 1','FirstRecipe',
        'http://www.ndtv.com/cooks/images/chicken-chettinad_620.jpg'),
        new Recipe('Recipe 2',' SecondRecipe',
        'http://www.ndtv.com/cooks/images/chicken-chettinad_620.jpg'),
        new Recipe('Recipe 3',' ThirdRecipe',
        'http://www.ndtv.com/cooks/images/chicken-chettinad_620.jpg')
    ];
    getReciepe()
    {
       return this.recipes.slice();
    }
    getRec(index: number)
    {
       return this.recipes[index];
    }
    addRecipe(recipe:Recipe)
    {
        this.recipes.push(recipe);
        this.reciepeAdded.emit(this.recipes.slice());
    }
    editRecipes(index:number)
    {
     return this.recipes[index];
      
    }
     updateRecipe(index:number, recipe:Recipe)
     {
          this.recipes[index] = recipe;
          this.reciepeAdded.emit(this.recipes.slice())
     }
     onDeleteRecipe(index:number)
     {
         this.recipes.splice(index,1);
         this.reciepeAdded.emit(this.recipes.slice());
     }


}