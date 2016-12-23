import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule}   from '@angular/forms';
import {AuthGuard} from './_guards/auth.guard';
import {AuthService} from './services/auth-service';
import {LoginComponent} from "./components/login/login.component";
import {HttpModule} from '@angular/http';


const routes:Routes = [
  {path: '', component: LoginComponent}
];


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})

export class AuthModule {
}

export {AuthGuard};
export {AuthService};
