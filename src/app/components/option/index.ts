import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {AccountModule} from "./account"
import {CategoryModule} from "./category"


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AccountModule,
    CategoryModule
  ],
  providers: []
})

export class OptionModule{}
