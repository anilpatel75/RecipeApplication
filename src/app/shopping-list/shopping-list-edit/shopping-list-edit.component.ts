import { IngredientService } from './../../shared/ingredients.service';
import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

    @ViewChild('nameInput') nameInputRef:ElementRef;
    @ViewChild('amountInput') amountInputRef:ElementRef;
   
    constructor(private shopingservice: IngredientService) { }

  ngOnInit() 
   {
  }
    onselected()
    {
        const ninput = this.nameInputRef.nativeElement.value;
        const amoinput = this.amountInputRef.nativeElement.value;
        const newIngredient = new  Ingredient(ninput,amoinput);
        this.shopingservice.addedIngredient(newIngredient);
    }


}
