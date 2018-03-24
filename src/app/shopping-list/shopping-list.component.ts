
import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { IngredientService } from '../shared/ingredients.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shopingservice: IngredientService) {
    
 }

    ngOnInit() 
    { 
      this.ingredients = this.shopingservice.getIngredients();
    this.ingredients = this.shopingservice.getIngredients();
    this.shopingservice.ingredientadded.subscribe(
      (ingre:Ingredient[]) =>
      {
      this.ingredients = ingre;
      }
    )}
    
     
    }



