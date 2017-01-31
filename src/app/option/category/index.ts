import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core"
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common"
import {CategoryComponent} from "./component/category.component";
import {AuthGuard} from "../../auth/_guards"
import {CategoryService} from './services/category.service';

const routes: Routes = [
  {
    path: 'option/categories/:type',
    component: CategoryComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CategoryService
  ]
})

export class CategoryModule {
  constructor() {
  }
}
