import {NgModule} from "@angular/core"
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common"
import {AccountComponent} from "./component/account.component";
import {AccountService} from './services/account.service';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    AccountService
  ]
})

export class AccountModule {
  constructor() {
  }
}
