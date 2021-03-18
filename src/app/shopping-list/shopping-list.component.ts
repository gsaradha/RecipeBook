import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredienty.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomato',10)
  ];
  constructor() { }

  ngOnInit(): void {
    console.log("init");
  }

  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
  }

}
