import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from './alert/alert.component';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner';
import {DOMPlaceholderDirective} from './DOMplaceholder/d-o-m-placeholder.directive';
import {DropdownDirective} from './dropdown.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    DOMPlaceholderDirective,
    DropdownDirective
  ],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    DOMPlaceholderDirective,
    DropdownDirective,
    CommonModule
  ]
})
export class SharedModule {}
