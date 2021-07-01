import { Injectable, OnInit } from "@angular/core";
import {Ingredient} from '../shared/ingredient.model'
import {Subject} from 'rxjs'

@Injectable()
export class ShoppingListService implements OnInit{

    ingredientschanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients:Ingredient[]=
    [new Ingredient("spagetti",5),
     new Ingredient("cream cheese",2)];

     getIngredient(){
        return this.ingredients.slice();
    }

    getEditIngredient(index:number){
      return this.ingredients[index];
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientschanged.next(this.ingredients.slice());
    }
    
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientschanged.next(this.ingredients.slice());
    }

    updateIngredient(index:number,newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        return this.ingredientschanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients); /// this is the 2nd method of sending ingredient to shopping list using spread(...) operator
        this.ingredientschanged.next(this.ingredients.slice());
    }
    ngOnInit(){
        
    }
}
