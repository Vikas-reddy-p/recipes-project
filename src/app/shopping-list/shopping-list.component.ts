import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'] 
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  private subscription:Subscription;
  ingredients: Ingredient[];
  constructor(private shoppingList:ShoppingListService) { }
  

  onEditItem(index:number){
    this.shoppingList.startedEditing.next(index);
  }

  ngOnInit() {
    this.ingredients=this.shoppingList.getIngredient();
   this.subscription = this.shoppingList.ingredientschanged.subscribe(
      (ingredient:Ingredient[])  => {
        this.ingredients=ingredient;
      }
      )
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
