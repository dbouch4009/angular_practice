import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [         //type assignment using TS
    new Recipe('BBQ Chicken','Delicious and grilled','https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Chicken_BBQ.jpg/1200px-Chicken_BBQ.jpg'),
    new Recipe('Boiled Goose','Cat and Mouse','https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Chicken_BBQ.jpg/1200px-Chicken_BBQ.jpg')
  ];  

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelectedAgain(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
