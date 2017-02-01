import {Component} from "@angular/core";
import {AccountService} from '../services/account.service';
import {Router} from '@angular/router';
import {Account} from './account.interface';
import {Currency} from './currency.model';

@Component({
  templateUrl: './account.html',
  styleUrls: ['./account.scss']
})

export class AccountComponent {
  errorMsg: String = '';
  accounts: Account[] = [];
  currencies: Currency[] = [];
  currentAccount: Account = {
    name: '',
    currency_id: 0
  };

  private errorHandler(err: any): void {
    this.errorMsg = err.message;
    console.log(err);
  }

  private addNewAccount(form, id: number): void {
    const name = this.currentAccount.name;
    const currentCurrency = this.currencies.find(el => el.id === Number(this.currentAccount.currency_id));
    const currency_name = currentCurrency.name;
    const currency_id = currentCurrency.id;
    const createdAccount = {
      id,
      name,
      currency_name,
      currency_id
    };

    form.reset();
    this.accounts.unshift(createdAccount);
  }

  private removeAccountFromList(id: number): void {
    this.accounts = this.accounts.filter(el => el.id !== id)
  }

  private clearForm(form): void {
    this.currentAccount = {
      name: '',
      currency_id: 0
    };
    form.reset();
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
    this.account.createNewAccount(this.currentAccount)
      .subscribe(
        resp => this.addNewAccount(form, resp.id),
        err => this.errorHandler
      );
  }

  removeAccount(id: number) {
    this.account.removeAccountById(id)
      .subscribe(
        resp => this.removeAccountFromList(id),
        err => this.errorHandler
      );
  }

  makeAccountEditable(account) {
    Object.assign(this.currentAccount, account);
  }

  updateAccount(form) {
    this.account.updateAccount(this.currentAccount.id, this.currentAccount)
      .subscribe(
        () => {
          let updatedAccountIndex = this.accounts.findIndex(el => el.id === this.currentAccount.id);
          const currentCurrency = this.currencies.find(el => el.id === Number(this.currentAccount.currency_id));

          this.currentAccount.currency_name = currentCurrency.name;
          this.accounts[updatedAccountIndex] = this.currentAccount;
          this.clearForm(form);
        },
        err => this.errorHandler
      );
  }

  cancelEditing(form) {
    this.clearForm(form);
  }
}
