import {Component} from "@angular/core";
import {AccountService} from '../services/account.service';
import {Router} from '@angular/router';
import {Account} from './account.model';
import {Currency} from './currency.model';

@Component({
  templateUrl: './account.html',
  styleUrls: ['./account.scss']
})

export class AccountComponent {
  errorMsg: String = '';
  accounts = [];
  currencies: Currency[] = [];
  newAccount: Account = {
    name: '',
    currency_id: 0
  };

  private errorHandler(err: any): void {
    this.errorMsg = err.message;
    console.log(err);
  }

  private addNewAccount(form): void {
    const name = this.newAccount.name;
    const currentCurrency = this.currencies.find(el => el.id === Number(this.newAccount.currency_id));
    const currency_name = currentCurrency.name;
    const createdAccount = {
      name,
      currency_name
    };

    form.reset();
    this.accounts.unshift(createdAccount);
  }

  private removeAccountFromList(id: number): void {
    this.accounts = this.accounts.filter(el => el.id !== id)
  }

  constructor(private account: AccountService, private router: Router) {
    this.account.getList()
      .subscribe(
        resp => this.accounts = resp.data,
        err => this.errorHandler
      );

    this.account.getCurrencyList()
      .subscribe(
        resp => this.currencies = resp.data,
        err => this.errorHandler
      );
  }

  createAccount(form) {
    this.account.createNewAccount(this.newAccount)
      .subscribe(
        resp => this.addNewAccount(form),
        err => this.errorHandler
      );
  }

  removeAccount(id: number) {
    console.log('delete click')
    this.account.removeAccountById(id)
      .subscribe(
        resp => this.removeAccountFromList(id),
        err => this.errorHandler
      );
  }
}
