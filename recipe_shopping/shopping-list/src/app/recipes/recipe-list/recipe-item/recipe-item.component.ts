import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../Shared/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);  //replacing input / output component chain
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
