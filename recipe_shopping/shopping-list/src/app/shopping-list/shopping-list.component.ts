import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    private igChangeSub: Subscription;

  // ingredients: Ingredient[] = [   // transferred to services
  //   new Ingredient('Apples',5),
  //   new Ingredient('Corn',2)
  // ];

  // onIngredientAdded(ingr: Ingredient){  //transferred to service
  //   this.ingredients.push(ingr);
  // }

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    
    //edit for using Subjects
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredientsChanged: Ingredient[]) => {
        this.ingredients = ingredientsChanged
      }
    )
  }

  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }

}
