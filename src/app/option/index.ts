import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {AccountModule} from "./account"
import {ExpenseModule} from "./expense"
import {IncomeModule} from "./income"


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AccountModule,
    ExpenseModule,
    IncomeModule
  ],
  providers: []
})

export class OptionModule{}
