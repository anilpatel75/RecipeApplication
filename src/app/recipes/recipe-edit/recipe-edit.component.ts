import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute ,Params } from '@angular/router';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  id: number;
  editMode:boolean = false;
  editRecipe:any =[];
  



constructor( private route: ActivatedRoute ,private recipeservice:RecipeService) { }
   ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>
      {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      });
    }
  private initForm() 
     {
       let recipeName ='';
       let recipeImagePath ='';
       let recipeDescription ='';
       if(this.editMode)
       {
         const recipe = this.recipeservice.editRecipes(this.id);
        recipeName = recipe.name;
        recipeImagePath = recipe.imagePath;
        recipeDescription = recipe.description;
       }
         this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName,Validators.required),
        'imagePath':new FormControl(recipeImagePath,Validators.required),
         'description':new FormControl(recipeDescription,Validators.required)
        })
    }  

  onselected()
  {
     if(this.editMode)
     {
       console.log(this.recipeForm.value)
       this.recipeservice.updateRecipe(this.id,this.recipeForm.value);
     }
     else{
       this.recipeservice.addRecipe(this.recipeForm.value);
       }
       this.onClear();
     }
      onClear()
      {
        this.recipeForm.reset();
        this.editMode = false;
      }
}
