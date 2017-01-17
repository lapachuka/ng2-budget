import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core"
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common"
import {ExpenseComponent} from "./component/expense.component";
import {AuthGuard} from "../../auth/_guards"
import {ExpenseService} from './services/expense.service';

const routes: Routes = [
  {
    path: 'option/expense',
    component: ExpenseComponent,
    canActivate: [AuthGuard]
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
