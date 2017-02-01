import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from '@angular/router';
import {CategoryService} from '../services/category.service';
import {Category} from './category.interface';

@Component({
  templateUrl: './category.html',
  styleUrls: ['./category.scss']
})

export class CategoryComponent implements OnInit {
  categoryType: string
  errorMsg: string = '';
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  currentCategory: Category = {
    name: '',
    parent_id: null,
    sub_categories: []
  };

  private errorHandler(err: any): void {
    this.errorMsg = err.message;
    console.log(err);
  }

  private clearCategory(): void {
    this.currentCategory = {
      name: '',
      parent_id: null,
      sub_categories: []
    };
    this.filteredCategories = this.categories;
  }

  private addNewCategory(id: number): void {
    this.currentCategory.id = id;

    if (!this.currentCategory.parent_id) {
      this.categories.unshift(this.currentCategory);
    } else {
      const parent = this.categories.find(el => el.id === Number(this.currentCategory.parent_id));

      parent.sub_categories.unshift(this.currentCategory);
    }

    this.clearCategory();

  }

  private removeFromList(id: number, parentId?: number): void {
    if (parentId) {
      const parent = this.categories.find(el => el.id === parentId);

      parent.sub_categories = parent.sub_categories.filter(el => el.id !== id);

      return
    }

    this.categories = this.categories.filter(el => el.id !== id)

  }

  private getAll(): void {
    this.categoryService.getList(this.categoryType)
      .subscribe(
        resp => {
          this.categories = resp.data;
          this.filteredCategories = resp.data;
        },
        err => {
          this.errorHandler(err)
        }
      );
  }

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const type = params['type'];

      if (!~['expenses', 'income'].indexOf(type)) {
        this.router.navigate(['option/categories/expenses']);
      }
      this.categoryType = type;
      this.getAll()
    });
  }

  makeEditable(expense: Category, parentExpense): void {
    this.currentCategory = Object.assign({}, expense);
    this.currentCategory.parent_id = parentExpense ? parentExpense.id : null;
    this.filteredCategories = this.filteredCategories.filter(el => el.id !== this.currentCategory.id);
  }

  createCategory() {
    this.categoryService.createCategory(this.currentCategory, this.categoryType)
      .subscribe(
        resp => this.addNewCategory(resp.id),
        err => {
          this.errorHandler(err)
        }
      );
  }

  removeCategory(id: number, parentId?: number) {
    this.categoryService.deleteCategoryById(id, this.categoryType)
      .subscribe(
        resp => this.removeFromList(id, parentId),
        err => {
          this.errorHandler(err)
        }
      );
  }

  updateCategory() {
    this.categoryService.updateCategoryById(this.currentCategory.id, this.currentCategory, this.categoryType)
      .subscribe(
        resp => {
          this.getAll();
          this.clearCategory();
        },
        err => {
          this.errorHandler(err)
        }
      );
  }

  cancelEditing() {
    this.clearCategory();
  }
}
