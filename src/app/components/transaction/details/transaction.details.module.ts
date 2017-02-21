import {NgModule} from "@angular/core";
import {MdButtonModule} from "@angular/material";
import {TransactionDetailsComponent} from "./transaction.details.component";

@NgModule({
  imports: [
    MdButtonModule
  ],
  declarations: [
    TransactionDetailsComponent
  ],
  entryComponents: [
    TransactionDetailsComponent
  ]
})

export class TransactionDetailModule{

}
