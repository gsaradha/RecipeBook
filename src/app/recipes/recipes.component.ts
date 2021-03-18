import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
 recipes = [];
  userRecipe:Recipe ={name:'',description:'',imagePath:''};
  constructor() { }

  ngOnInit(): void {
  }

  onUserSelectedRecipe(recipe:Recipe){
    this.userRecipe = recipe;
  }

}
