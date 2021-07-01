import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shoppingList.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  finalDisplay:Recipe;
  id:number;
  constructor(private shoppinglist : ShoppingListService,
              private  route: ActivatedRoute,
              private recipeService: RecipeService,
              private router:Router) { }

  ngOnInit() {
    const id = this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];// here the Id we receive is in string format so to cast it to number we add + in front of it.
      this.finalDisplay = this.recipeService.getRecipe(this.id);
    });
  }

  toShoppingList(){
    //for(let ingredient of this.finalDisplay.ingredients){  // THIS IS  ONE WAY OF DOING
   // this.shoppinglist.addIngredient(ingredient);
   this.shoppinglist.addIngredients(this.finalDisplay.ingredients);// this is 2nd way.. using ... operator refer to shoppinglist service
   
    }

    onEditRecipe(){
      //this.router.navigate(['edit'],{relativeTo:this.route});
      this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route}); // another way
    }
    onDeleteRecipe(){
      this.recipeService.deleteRecipe(this.id);
    }
  }
