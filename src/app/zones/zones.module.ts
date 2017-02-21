import {InternalZoneComponent} from "./internal-zone/internal-zone.component";
import {NgModule} from "@angular/core";
import {AuthZoneComponent} from "./auth-zone/auth-zone.component";
import {RouterModule} from "@angular/router";
import {InternalZoneActivateService} from "./internal-zone/itnernal-zone.activate";
import {AuthZoneActivateService} from "./auth-zone/auth-zone.activate";
import {SidebarComponent} from "../shared/sidebar/sidebar";
import {CommonModule} from "@angular/common";
import {TopNavModule} from "../shared/topnav/index";

@NgModule({
  declarations: [
    InternalZoneComponent,
    AuthZoneComponent,
    SidebarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    TopNavModule
  ],
  providers: [
    InternalZoneActivateService,
    AuthZoneActivateService
  ]
})

export class ZonesModule{}
