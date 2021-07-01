import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeReceived :Recipe;
  @Input() index: number;
  constructor(private route:ActivatedRoute){}


  ngOnInit() {
    
  }

}
