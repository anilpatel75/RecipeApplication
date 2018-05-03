import { IngredientService } from './shared/ingredients.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRouting } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { recipeModule } from './recipes/recipeModule';
import { HomeComponent } from './home/home.component';
import { ShoppingListModule } from './shopping-list/shoppingListModule';



 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    recipeModule,
    ShoppingListModule, 
    AppRouting
   
  ],
  providers: [IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
