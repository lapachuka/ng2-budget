import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule}   from '@angular/forms';
import {AuthGuard} from './_guards/auth.guard';
import {AuthService} from './services/auth-service';
import {LoginComponent} from "./components/login/login.component";
import {HttpModule} from '@angular/http';
import {HttpClient} from './services/http.client';
import {RestrictedGuard} from './_guards/index'


const routes:Routes = [
  {path: '', component: LoginComponent, canActivate: [RestrictedGuard]}
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
    HttpClient,
    AuthGuard,
    RestrictedGuard,
    AuthService
  ]
})

export class AuthModule {
}

export {AuthGuard};
export {AuthService};
