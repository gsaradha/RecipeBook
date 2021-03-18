import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input()recipe:Recipe={name:'',description:'',imagePath:''}
@Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedItem(recipe:Recipe){
    this.selectedRecipe.emit(recipe);
  }

}
