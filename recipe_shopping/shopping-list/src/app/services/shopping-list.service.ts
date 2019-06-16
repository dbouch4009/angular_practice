import {Ingredient} from '../Shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import {Subject} from 'rxjs';
export class ShoppingListService{

    // replacing ingredientsChanged = new EventEmitter<Ingredient[]>();    //informing about ingredients array change

    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Corn',2)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
        //   for(let ingredient of ingredients){
        //       this.addIngredient(ingredient)
        //   }

        this.ingredients.push(...ingredients);  //ES6 spread operator
        this.ingredientsChanged.next(this.ingredients.slice());
      }

}