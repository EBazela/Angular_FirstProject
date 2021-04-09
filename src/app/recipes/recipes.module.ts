import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipeHomeComponent} from './recipe-home/recipe-home.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeHomeComponent,
    RecipeEditComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
  ]
})
export class RecipesModule {

}
