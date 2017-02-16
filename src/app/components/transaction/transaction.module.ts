import {NgModule} from "@angular/core";
import {TransactionComponent} from "./transaction.component";
import {TransactionService} from "./transaction.service";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [TransactionComponent],
  providers: [TransactionService],
  exports: [TransactionComponent],
  imports: [BrowserModule]
})

export class TransactionModule{

}
