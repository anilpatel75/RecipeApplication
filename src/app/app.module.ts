import { IngredientService } from './shared/ingredients.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRouting } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { recipeModule } from './recipes/recipe.Module';
import { HomeComponent } from './home/home.component';
import { ShoppingListModule } from './shopping-list/shoppingListModule';
import { RecipeService } from './recipes/recipe.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
   
  ],
  imports: [
    BrowserModule,
     AppRouting,
     recipeModule,
     ShoppingListModule,
     BrowserAnimationsModule
     
   
   
  ],
  providers: [IngredientService ,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
