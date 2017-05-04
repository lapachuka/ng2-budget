import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {FormControl} from "@angular/forms";
import {AccountService} from "../../../services/account.service";
import {CategoryService} from "../../../services/category.service";
import {TransactionService} from "../../../services/transaction.service";
import {IMyOptions, IMyDateModel} from "mydatepicker";
import {Transaction} from "../transaction.model";

@Component({
  selector: 'transaction-details',
  templateUrl: './transaction.details.dialog.html',
  styleUrls: ['./transaction.details.scss']
})


export class TransactionDetailsComponent {

  mode;
  type;
  transaction: Transaction;
  categories = [];
  filteredCateogires = [];
  accounts = [];
  transactionId;

  onDateChanged(event: IMyDateModel) {
  }

  constructor(public dialogRef: MdDialogRef<TransactionDetailsComponent>,
              private categoryService: CategoryService,
              private transactionService: TransactionService,
              public Account: AccountService) {

  }

  filterCategory(val: string) {
    this.filteredCateogires = val ? this.categories.filter((s) => new RegExp(val, 'gi').test(s.name)) : this.categories;
  }

  ngOnInit() {
    this.transactionId && this.fillCurrentTransaction();
    this.fillCategory(this.type || this.transaction.type);
    this.fillAccounts()
  }

  fillCurrentTransaction() {
    this.transactionService.getById(this.transactionId)
      .subscribe((curTran) => {
        curTran.type = this.type;
        this.transaction = new Transaction(curTran);
      });
  }


  //todo: need refactor this part
  fillCategory(type) {
    this.categoryService.getList(type)
      .subscribe((resp) => {
        let categoriesArray = [];

        resp.data.forEach((category) => {
          if (category.sub_categories) {
            categoriesArray = categoriesArray.concat(category.sub_categories);
          }
        });

        this.categories = resp.data;
        this.categories = this.categories.concat(categoriesArray);
        if (!this.transactionId) {
          this.transaction.category_id = this.categories[0].id;
        }
      });
  }

  fillAccounts() {
    this.Account.getList()
      .subscribe((resp) => {
          this.accounts = resp.data;
          if (!this.transactionId) {
            this.transaction.account_id = this.accounts[0].id;
          }
        }
      )
  }

  ok() {
    let cDate = this.transaction.curDate.date;
    this.transaction.date = new Date(cDate.year, cDate.month - 1, cDate.day);
    this.transactionService.create(this.transaction)
      .subscribe(() => {
        this.dialogRef.close(this.transaction);
      });
  }

  update() {
    let cDate = this.transaction.curDate.date;
    this.transaction.date = new Date(cDate.year, cDate.month - 1, cDate.day);
    this.transactionService.update(this.transaction)
      .subscribe(() => {
        this.dialogRef.close(this.transaction);
      });
  }

  cancel() {
    this.dialogRef.close(false);
  }

  addMore() {

  }

}

