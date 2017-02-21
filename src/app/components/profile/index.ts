import {SignInComponent} from "./sign-in/sign-in.component";
import {NgModule} from "@angular/core";
import {AuthService} from "./auth.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MdInputModule, MdButtonModule} from "@angular/material";

@NgModule({
  declarations: [
    SignInComponent
  ],
  providers: [
    AuthService
  ],
  imports: [
    FormsModule,
    CommonModule,
    MdInputModule,
    MdButtonModule
  ]
})

export class ProfileModule {
}
