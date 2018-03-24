import { EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

export class IngredientService
{
 ingredientadded = new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[] = 
    [
        new Ingredient('apple' ,5),
        new Ingredient('orange', 10)
    ];

    getIngredients()
    {
     return this.ingredients.slice();
    }
    addedIngredient(ingredient: Ingredient)
    {
     this.ingredients.push(ingredient);
     this.ingredientadded.emit(this.ingredients.slice());
     
    }

   
}