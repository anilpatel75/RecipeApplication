import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
export class RecipeService
{
    reciepeAdded = new EventEmitter<Recipe>();


    public recipes: Recipe[] =[
        new Recipe('Test Rcipe','This is My FirstRecipe','http://www.ndtv.com/cooks/images/chicken-chettinad_620.jpg'),
        new Recipe('Anil Test Rcipe','This is My FirstRecipe','http://www.ndtv.com/cooks/images/chicken-chettinad_620.jpg'),
        new Recipe(' Htarth Test Rcipe','This is My FirstRecipe','http://www.ndtv.com/cooks/images/chicken-chettinad_620.jpg')
    ];
    getReciepe()
    {
       return this.recipes.slice();
    }
    getRec(index: number)
    {
       return this.recipes[index];
    }

}