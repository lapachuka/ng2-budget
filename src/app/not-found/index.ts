import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {NotFoundComponent} from "./component/not-found.component";

const routes:Routes = [
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})

export class NotFoundModule{}
