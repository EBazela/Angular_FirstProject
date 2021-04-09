import {NgModule} from '@angular/core';
import {AuthComponent} from './auth/auth.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path: '', component: AuthComponent}])
  ]
})
export class AuthModule {

}
