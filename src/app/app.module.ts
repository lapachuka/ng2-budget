import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {DashboardModule} from "./components/dashboard/index";
import {OptionModule} from "./components/option/index";
import {AccountModule} from "./components/account/account.module";
import {HttpClient} from "./shared/services/http.client";
import {appRoutes} from "./app.routes";
import {ZonesModule} from "./zones/zones.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    ZonesModule,
    NgbModule.forRoot(),
    DashboardModule,
    OptionModule,
    AccountModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
