import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {DashboardComponent} from "./dashboard.component";
import {MdCardModule, MdToolbarModule} from "@angular/material";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MdCardModule,
    MdToolbarModule
  ],
  exports: [DashboardComponent],
  providers: []
})

export class DashboardModule{}
