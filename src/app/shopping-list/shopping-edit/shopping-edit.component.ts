import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredienty.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
ingredients:Ingredient={name:'',amount:0};
@ViewChild('inputAmount')inputAmount?:ElementRef;
@Output()ingredientAdded = new EventEmitter<Ingredient>();

  ngOnInit(): void {
  }

  onAdd(ingredientName:HTMLInputElement){
    this.ingredientAdded.emit({name:(<HTMLInputElement>ingredientName).value,amount:this.inputAmount?parseInt(this.inputAmount.nativeElement.value):0});
  }

}
