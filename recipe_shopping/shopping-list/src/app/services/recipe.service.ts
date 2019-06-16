import {Recipe} from '../Shared/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    recipes: Recipe[] = [         //type assignment using TS
        new Recipe('BBQ Chicken','Delicious and grilled','https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Chicken_BBQ.jpg/1200px-Chicken_BBQ.jpg',[
            new Ingredient('chicken meat',1),
            new Ingredient('sauce',30)
        ]),
        new Recipe('Boiled Goose','Cat and Mouse','https://jeanneeatsworld.files.wordpress.com/2009/12/dscn1698.jpg',[
            new Ingredient('goose meat',2),
            new Ingredient('bread',2)
        ])
      ]; 
      
      constructor(private shoppingListService: ShoppingListService){  
          //@injectable necessary for this
        
      }

      recipeSelected = new Subject<Recipe>();

      getRecipes(){
          return this.recipes.slice();  //slice() will return new array instead of accessing the memory reference
      }

      addIngredientsToShoppingList(ingredient: Ingredient[]){
        this.shoppingListService.addIngredients(ingredient);
      }

      getRecipe(id: number){
          return this.recipes[id];
      }
}