import { NgModule } from '@angular/core';
import { NgClass } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from '../recipes/recipes.component';
import { SelectRecipeComponent } from '../recipes/select-recipe/select-recipe.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RecipeDetaileComponent } from '../recipes/recipe-detaile/recipe-detaile.component';
 const recipeRoute:Routes =[
    {path:'recipes', component:RecipesComponent, 
    children:[
        {path:'', component:SelectRecipeComponent},
        {path:'new', component:RecipeEditComponent},
        {path:':id', component:RecipeDetaileComponent},
        {path:':id/edit', component:RecipeEditComponent}
       
      ]},
 ]
@NgModule({
    imports:[
        RouterModule.forChild(recipeRoute)
    ],
     exports:[RouterModule]
    })
export  class RecipeRouting
{

}