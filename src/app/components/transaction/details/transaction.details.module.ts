import {NgModule} from "@angular/core";
import {MdButtonModule, MdSelectModule, MdInputModule, MdAutocompleteModule} from "@angular/material";
import {TransactionDetailsComponent} from "./transaction.details.component";
import {CommonModule} from "@angular/common";
import {SelectModule} from "ng2-select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DatePickerModule} from "ng2-datepicker";
import {MyDatePickerModule} from "mydatepicker";

@NgModule({
  imports: [
    MdButtonModule,
    MdInputModule,
    MdSelectModule,
    CommonModule,
    DatePickerModule,
    ReactiveFormsModule,
    FormsModule,
    MyDatePickerModule,
    MdAutocompleteModule,
    SelectModule
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
