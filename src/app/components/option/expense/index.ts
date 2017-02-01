import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core"
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common"
import {ExpenseComponent} from "./component/expense.component";
import {ExpenseService} from './services/expense.service';

const routes: Routes = [
  {
    path: 'option/expense',
    component: ExpenseComponent
  }
];

@NgModule({
  declarations: [
    ExpenseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ExpenseService
  ]
})

export class ExpenseModule {
  constructor() {
  }
}
