import { SharedModule } from './../shared/sharedModule';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeListComponent } from './../recipes/recipe-list/recipe-list.component';
import { RecipeEditComponent } from './../recipes/recipe-edit/recipe-edit.component';
import { RecipeDetaileComponent } from './../recipes/recipe-detaile/recipe-detaile.component';
import { NgModule } from "@angular/core";
import { RecipeItemComponent } from '../recipes/recipe-List/recipe-item/recipe-item.component';
import { SelectRecipeComponent } from '../recipes/select-recipe/select-recipe.component';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeRouting } from './recipe-Routing';


@NgModule({
    declarations:[
        RecipeDetaileComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeListComponent,
        SelectRecipeComponent,
        RecipesComponent
     ],
     imports:[
         CommonModule,
         ReactiveFormsModule,
         RecipeRouting,
         SharedModule
        ]
    })
export class recipeModule
{}