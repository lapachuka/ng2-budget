import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/index';
import { DashboardModule } from './dashboard/index';
import { OptionModule } from './option/index';

import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {useHash: false}),
    FormsModule,
    HttpModule,
    AuthModule,
    DashboardModule,
    OptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
