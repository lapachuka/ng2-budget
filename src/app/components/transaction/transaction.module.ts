import {NgModule} from "@angular/core";
import {TransactionComponent} from "./transaction.component";
import {TransactionService} from "./transaction.service";
import {BrowserModule} from "@angular/platform-browser";
import {TransactionDetailModule} from "./details/transaction.details.module";
import {CommonModule} from "@angular/common";
import {MdDialogModule, MdListModule, MdCardModule} from "@angular/material";

@NgModule({
  declarations: [TransactionComponent],
  providers: [TransactionService],
  exports: [TransactionComponent, TransactionDetailModule, MdDialogModule, CommonModule],
  imports: [BrowserModule, MdListModule, MdCardModule]
})

export class TransactionModule {

}
