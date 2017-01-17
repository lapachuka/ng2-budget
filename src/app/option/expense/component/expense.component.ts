import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {ExpenseService} from '../services/expense.service';
import {Expense} from './expense.interface';

@Component({
  templateUrl: './expense.html',
  styleUrls: ['./expense.scss']
})

export class ExpenseComponent implements OnInit {
  errorMsg: String = '';
  expenses: Expense[] = [];
  filteredExpenses: Expense[] = [];
  currentExpense: Expense = {
    name: '',
    parent_id: null,
    sub_categories: []
  };

  private errorHandler(err: any): void {
    this.errorMsg = err.message;
    console.log(err);
  }

  private clearExpense(): void {
    this.currentExpense = {
      name: '',
      parent_id: null,
      sub_categories: []
    };
    this.filteredExpenses = this.expenses;
  }

  private addNewExpense(id: number): void {
    this.currentExpense.id = id;

    if (!this.currentExpense.parent_id) {
      this.expenses.unshift(this.currentExpense);
    } else {
      const parent = this.expenses.find(el => el.id === Number(this.currentExpense.parent_id));

      parent.sub_categories.unshift(this.currentExpense);
    }

    this.clearExpense();

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
          this.filteredExpenses = resp.data;
        },
        err => this.errorHandler
      );
  }

  constructor(private expenseService: ExpenseService, private router: Router) {

  }

  ngOnInit() {
    this.getAll();
  }

  makeEditable(expense: Expense, parentExpense): void {
    this.currentExpense = Object.assign({}, expense);
    this.currentExpense.parent_id = parentExpense ? parentExpense.id : null;
    this.filteredExpenses = this.filteredExpenses.filter(el => el.id !== this.currentExpense.id);
  }

  createExpense() {
    this.expenseService.createExpense(this.currentExpense)
      .subscribe(
        resp => this.addNewExpense(resp.id),
        err => this.errorHandler
      );
  }

  removeExpense(id: number, parentId?: number) {
    this.expenseService.deleteExpenseById(id)
      .subscribe(
        resp => this.removeFromList(id, parentId),
        err => this.errorHandler
      );
  }

  updateExpense() {
    this.expenseService.updateExpenseById(this.currentExpense.id, this.currentExpense)
      .subscribe(
        resp => {
          this.getAll();
          this.clearExpense();
        },
        err => this.errorHandler
      );
  }

  cancelEditing() {
    this.clearExpense();
  }
}
