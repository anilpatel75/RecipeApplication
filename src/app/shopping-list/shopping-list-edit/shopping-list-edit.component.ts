import { IngredientService } from './../../shared/ingredients.service';
import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('f') shoppingForm:NgForm;
    editMode:boolean = false;
     editModeIndex:number;
     editItem:any =[];
  constructor(private shopingservice: IngredientService) { }
  
  ngOnInit() 
   {
     this.shopingservice.editStarted.subscribe
     ((index:number)=>
    {
        this.editModeIndex = index;
        this.editMode = true;
        this.editItem = this.shopingservice.getEditIngredient(index);
        this.shoppingForm.setValue({
          name : this.editItem.name,
          amount:this.editItem.amount
        })

    })

   }
    onselected(form:NgForm)
    {
        const value = form.value;
        const newIngredient = new  Ingredient(value.name,value.amount);
        if(this.editMode)
        {
          this.shopingservice.updateIngredient(this.editModeIndex,newIngredient)
        }
        else{
          this.shopingservice.addedIngredient(newIngredient);
            }
        this.editMode = false;
         form.reset();
    
        }
        onClear()
        {     this.editMode = false;
           this.shoppingForm.reset();
          
        }
        ondelete()
        {
         
            this.shopingservice.deleteIngredient(this.editModeIndex);
            this.onClear();
            
        }
       
      

}
