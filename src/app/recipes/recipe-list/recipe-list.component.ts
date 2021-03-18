import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A Test Recipe1','This is simple Recipe','../../../assets/Images/choc.jpg'),
    new Recipe('A Test Recipe2','This is simple Recipe','../../../assets/Images/soup.jpg')
  ];
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe:Recipe){
    this.selectedRecipe.emit(recipe);
  }

}
