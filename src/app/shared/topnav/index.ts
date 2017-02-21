import {NgModule} from "@angular/core";
import {MdIconModule, MdButtonModule, MdMenuModule} from "@angular/material";
import {TopNavComponent} from "./topnav";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    MdIconModule,
    MdButtonModule,
    RouterModule,
    MdMenuModule
  ],
  exports: [
    TopNavComponent
  ]
})

export class TopNavModule{

}
