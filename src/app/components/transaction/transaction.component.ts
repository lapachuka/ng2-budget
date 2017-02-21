import {Component} from "@angular/core";
import {TransactionService} from "./transaction.service";
import {ActivatedRoute, Params} from "@angular/router";
import {MdDialog} from "@angular/material";
import {TransactionDetailsComponent} from "./details/transaction.details.component";

@Component({
  templateUrl: './transaction-list.html'
})

export class TransactionComponent {
  transactions;

  constructor(private Transaction: TransactionService, private activatedRoute: ActivatedRoute, private dialog: MdDialog) {

  }

  ngOnInit() {
    const curYear = new Date().getFullYear();
    const curMonth = new Date().getMonth();
    const type = 'income';

    this.activatedRoute.params.subscribe((params: Params) => {
      const type = params['type'];

      this.Transaction.getIncomeList(curMonth + 1, curYear, type)
        .subscribe((resp) => {
          this.transactions = resp.data;
        })
    });
  }

  showDetails(name){
    let dialogRef = this.dialog.open(TransactionDetailsComponent);
    dialogRef.componentInstance.name = name;
    dialogRef.afterClosed().subscribe((name) => {
      console.log(name)
    });
  }

}
