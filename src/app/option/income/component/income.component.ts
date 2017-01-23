import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {IncomeService} from '../services/income.service';
import {Income} from './income.interface';

@Component({
  templateUrl: './income.html',
  styleUrls: ['./income.scss']
})

export class IncomeComponent implements OnInit {
  errorMsg: String = '';
  expenses: Income[] = [];
  filteredIncomes: Income[] = [];
  currentIncome: Income = {
    name: '',
    parent_id: null,
    sub_categories: []
  };

  private errorHandler(err: any): void {
    this.errorMsg = err.message;
    console.log(err);
  }

  private clearIncome(): void {
    this.currentIncome = {
      name: '',
      parent_id: null,
      sub_categories: []
    };
    this.filteredIncomes = this.expenses;
  }

  private addNewIncome(id: number): void {
    this.currentIncome.id = id;

    if (!this.currentIncome.parent_id) {
      this.expenses.unshift(this.currentIncome);
    } else {
      const parent = this.expenses.find(el => el.id === Number(this.currentIncome.parent_id));

      parent.sub_categories.unshift(this.currentIncome);
    }

    this.clearIncome();

  }

  private removeFromList(id: number, parentId?: number): void {
    if (parentId) {
      const parent = this.expenses.find(el => el.id === parentId);

      parent.sub_categories = parent.sub_categories.filter(el => el.id !== id);

      return
    }

    this.expenses = this.expenses.filter(el => el.id !== id)

  }

  private getAll(): void {
    this.expenseService.getList()
      .subscribe(
        resp => {
          this.expenses = resp.data;
          this.filteredIncomes = resp.data;
        },
        err => this.errorHandler
      );
  }

  constructor(private expenseService: IncomeService, private router: Router) {

  }

  ngOnInit() {
    this.getAll();
  }

  makeEditable(expense: Income, parentExpense): void {
    this.currentIncome = Object.assign({}, expense);
    this.currentIncome.parent_id = parentExpense ? parentExpense.id : null;
    this.filteredIncomes = this.filteredIncomes.filter(el => el.id !== this.currentIncome.id);
  }

  createIncome() {
    this.expenseService.createExpense(this.currentIncome)
      .subscribe(
        resp => this.addNewIncome(resp.id),
        err => this.errorHandler
      );
  }

  removeIncome(id: number, parentId?: number) {
    this.expenseService.deleteExpenseById(id)
      .subscribe(
        resp => this.removeFromList(id, parentId),
        err => this.errorHandler
      );
  }

  updateIncome() {
    this.expenseService.updateExpenseById(this.currentIncome.id, this.currentIncome)
      .subscribe(
        resp => {
          this.getAll();
          this.clearIncome();
        },
        err => this.errorHandler
      );
  }

  cancelEditing() {
    this.clearIncome();
  }
}
