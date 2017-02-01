import {InternalZoneComponent} from "./internal-zone/internal-zone.component";
import {NgModule} from "@angular/core";
import {AuthZoneComponent} from "./auth-zone/auth-zone.component";
import {RouterModule} from "@angular/router";
import {InternalZoneActivateService} from "./internal-zone/itnernal-zone.activate";
import {AuthZoneActivateService} from "./auth-zone/auth-zone.activate";
import {TopNavComponent} from "../shared/topnav/topnav";
import {SidebarComponent} from "../shared/sidebar/sidebar";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    InternalZoneComponent,
    AuthZoneComponent,
    TopNavComponent,
    SidebarComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  providers: [
    InternalZoneActivateService,
    AuthZoneActivateService
  ]
})

export class ZonesModule{}
