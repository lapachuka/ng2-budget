import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {DashboardModule} from "./components/dashboard/index";
import {CategoryModule} from "./components/option/category";
import {ProfileModule} from "./components/profile/index";
import {AccountModule} from "./components/option/account";
import {HttpClient} from "./shared/services/http.client";
import {appRoutes} from "./app.routes";
import {ZonesModule} from "./zones/zones.module";
import {TransactionModule} from "./components/transaction/transaction.module";
import {MaterialModule} from "@angular/material";
import 'hammerjs';
import {TopNavModule} from "./shared/topnav/index";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    MaterialModule,
    ZonesModule,
    NgbModule.forRoot(),
    DashboardModule,
    CategoryModule,
    AccountModule,
    TransactionModule,
    TopNavModule,
    ProfileModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
