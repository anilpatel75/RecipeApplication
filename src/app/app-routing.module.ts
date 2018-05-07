import { HomeComponent } from './home/home.component';
import { RecipeDetaileComponent } from './recipes/recipe-detaile/recipe-detaile.component';
import { SelectRecipeComponent } from './recipes/select-recipe/select-recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Component, NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { recipeModule } from './recipes/recipe.Module';
 
const appRoutes: Routes = [
     {path:'',component: HomeComponent},
    
      {path:'shopping-list', component: ShoppingListComponent}
   
];
 
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRouting
{


}