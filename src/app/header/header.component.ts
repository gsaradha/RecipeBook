import { Component, Output,EventEmitter } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{
@Output() recipe = new EventEmitter<string>();
    OnRecipes(){
        this.recipe.emit('recipe');
    }

    OnShopping(){
        this.recipe.emit('shop');
    }

}