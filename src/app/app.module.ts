import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing-module';
import {RecipeService} from './recipes/recipe.service';
import {DataStorageService} from './shared/data-storage.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RecipesResolverService} from './recipes/recipes-resolver.service';
import {AuthComponent} from './auth/auth/auth.component';
import {LoadingSpinnerComponent} from './shared/loading-spinner/loading-spinner';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {AlertComponent} from './shared/alert/alert.component';
import {DOMPlaceholderDirective} from './shared/DOMplaceholder/d-o-m-placeholder.directive';
import {RecipesModule} from './recipes/recipes.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    DOMPlaceholderDirective
  ],
  imports: [
    RecipesModule,
    ShoppingListModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService,
    RecipesResolverService,
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
