import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'transaction-details',
  templateUrl: './transaction.details.dialog.html',
  styleUrls: ['./transaction.details.scss']
})


export class TransactionDetailsComponent{
  name: string = '';

  constructor(public dialogRef: MdDialogRef<TransactionDetailsComponent>){
  }

  ok() {
    this.dialogRef.close(true);
  }
}

