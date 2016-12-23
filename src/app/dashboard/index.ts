import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {DashboardComponent} from "./component/dashboard.component";
import {AuthGuard} from "../auth/_guards/index"

const routes:Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})

export class DashboardModule{}
