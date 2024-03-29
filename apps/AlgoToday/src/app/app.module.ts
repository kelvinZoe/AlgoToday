import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routing/app-routing.module";
import { GlobalHeaderComponentModule } from "@AlgoToday/common/ui";
import { GlobalFooterModule } from "@AlgoToday/common/ui";
import { GlobalSidenavModule } from "@AlgoToday/common/ui";
import { MatListModule } from "@angular/material/list";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { environment } from "@AlgoToday/common/common-environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { environment } from "@AlgoToday/common/common-environment";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, AlgoToday, GlobalFooterModule, GlobalSidenavModule, MatListModule, StoreModule.forRoot({}), StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: environment.production, // Restrict extension to log-only mode
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
  }), StoreModule.forRoot({}), StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: environment.production, // Restrict extension to log-only mode
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
  }),],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
