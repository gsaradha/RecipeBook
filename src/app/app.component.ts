import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeBook';
  canTargetRecipe:boolean = false;

  onGetRecipeEvent(e:string){
    if(e === 'recipe'){
      this.canTargetRecipe = true;
    }
    else{
      this.canTargetRecipe = false;
    }
  }
}
