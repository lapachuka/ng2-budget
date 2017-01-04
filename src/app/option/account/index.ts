import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {AccountComponent} from "./component/account.component";
import {AuthGuard} from "../../auth/_guards"
import {AccountService} from './services/account.service';

const routes: Routes = [
  {
    path: 'option/account',
    component: AccountComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AccountService
  ]
})

export class AccountModule {
  constructor() {
  }
}
