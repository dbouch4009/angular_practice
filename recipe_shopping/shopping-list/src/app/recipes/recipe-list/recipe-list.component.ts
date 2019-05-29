import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../Shared/recipe.model';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ ];  

  // made obsolete by using services to manage data
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // onRecipeSelectedAgain(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

  constructor(private recipeService: RecipeService){

  } 

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
