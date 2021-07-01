import { Injectable, OnInit } from '@angular/core';
import {Recipe} from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService implements OnInit{

    recipesChanged = new Subject<Recipe[]>();
    /*private recipes: Recipe[] = [
        new Recipe("recipe 1",
        "this is the first recipe",
        "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg",
        [
            new Ingredient('noodles',2),
            new Ingredient('sauces',2)
        ]),
        new Recipe("recipe 2",
        "this is the second recipe",
        "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg",
        [
            new Ingredient('ramen',5),
            new Ingredient('meat',5)
        ])
      ];*/
      private recipes:Recipe[]=[];

      getRecipes(){
          return this.recipes.slice();// this will return a new array which is exactly the copy of the recipes array.
      }

      getRecipe(index:number){
        return this.recipes[index];    
      }

    ngOnInit(){
        
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number,newrecipe:Recipe){
        this.recipes[index] = newrecipe;
        this.recipesChanged.next(this.recipes.slice());

    }
    
    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes:Recipe[]){
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}