import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  subscription : Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem:Ingredient;
  @ViewChild('f',{static:false}) editedForm:NgForm;

  onAddItem(form:NgForm){
    const value=form.value
    const newingredient : Ingredient= new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppinglist.updateIngredient(this.editedItemIndex,newingredient);
    }else{
    this.shoppinglist.addIngredient(newingredient);
  }
    this.editMode=false;
    form.reset();
  }

  onClear(){
    this.editMode=false;
    this.editedForm.reset();
  }
  
  onDelete(){
    this.shoppinglist.deleteIngredient(this.editedItemIndex)
    this.onClear();
  }

  constructor(private shoppinglist:ShoppingListService) { }

  ngOnInit(){
    this.subscription= this.shoppinglist.startedEditing.subscribe((index:number) => {
      this.editMode=true;
      this.editedItemIndex=index;
      this.editedItem=this.shoppinglist.getEditIngredient(index);
      this.editedForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
