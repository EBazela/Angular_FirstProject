import {Component, OnInit} from '@angular/core';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.recipe = this.recipeService.getRecipe(+params['id']);
        }
      );
  }

  onRecipeAddedToShoppingList(recipe: Recipe) {
    this.recipeService.addIngredientsToShoppingList(recipe);
  }

  onEditRecipe() {
    // const id = this.route.params['id'];
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    const id = this.route.params['id'];
    this.recipeService.deleteRecipe(id);
    this.router.navigate(['/recipes']);
  }
}
