import {Component} from "@angular/core";
import {AccountService} from '../services/account.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  templateUrl: './account.html',
  styleUrls: ['./account.scss']
})

export class AccountComponent {
  errorMsg:String = '';
  accounts = [];
  currencies = [];

  constructor(private account:AccountService, private router:Router) {
    this.account.getList()
      .subscribe(
        (resp) => {
          console.log(resp);
          this.accounts = resp.data
        },
        err => {
          // Log errors if any
          this.errorMsg = err.message;
          console.log(err);
        });

    this.account.getCurrencyList()
      .subscribe(
        (resp) => {
          console.log(resp);
          this.currencies = resp.data
        },
        err => {
          // Log errors if any
          this.errorMsg = err.message;
          console.log(err);
        });
  }

  createAccount(accountModel: FormsModule) {
    console.log('fire create account event');
    console.log(accountModel);
  }
}
