import {NgModule} from "@angular/core"
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common"
import {CategoryComponent} from "./component/category.component";
import {CategoryService} from './services/category.service';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CategoryService
  ]
})

export class CategoryModule {
  constructor() {
  }
}
