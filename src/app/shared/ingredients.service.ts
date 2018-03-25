import { EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs/Subject';

export class IngredientService
{
 ingredientadded = new Subject<Ingredient[]>();
 editStarted = new Subject<number>();
 deleteStarted = new Subject<number>();
  edit:number;

   private ingredients: Ingredient[] = 
    [
        new Ingredient('apple' ,5),
        new Ingredient('orange', 10)
    ];

    getIngredients()
    {
     return this.ingredients.slice();
    }
    getEditIngredient(index:number)
    {
        this.edit = index;
        return this.ingredients[index];
    }
    addedIngredient(ingredient: Ingredient)
    {
     this.ingredients.push(ingredient);
      return this.ingredientadded.next(this.ingredients.slice());
    }
    updateIngredient(index:number, newIngredient:Ingredient)
    {
        this.ingredients[index] = newIngredient;
        this.ingredientadded.next(this.ingredients.slice());
    }
    deleteIngredient(index:number)
    {
        this.ingredients.splice(index,1);
        this.ingredientadded.next(this.ingredients.slice());
    }


   
}