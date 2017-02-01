import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core"
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common"
import {IncomeComponent} from "./component/income.component";
import {IncomeService} from './services/income.service';

const routes: Routes = [
  {
    path: 'option/income',
    component: IncomeComponent
  }
];

@NgModule({
  declarations: [
    IncomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    IncomeService
  ]
})

export class IncomeModule {
  constructor() {
  }
}
