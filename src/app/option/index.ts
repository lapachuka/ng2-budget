import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {AccountModule} from "./account"
import {ExpenseModule} from "./expense"


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AccountModule,
    ExpenseModule
  ],
  providers: []
})

export class OptionModule{}
