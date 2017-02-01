import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core"
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common"
import {AccountComponent} from "./component/account.component";
import {AccountService} from './services/account.service';

const routes: Routes = [
  {
    path: 'option/account',
    component: AccountComponent
  }
];

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
