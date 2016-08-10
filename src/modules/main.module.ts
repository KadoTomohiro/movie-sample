import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {Routes} from './../modules/main.routes';
import {AppComponent, MovieComponent, SignageComponent} from './../components';
import {Cyclical} from './../services'


@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, HttpModule, RouterModule.forRoot(Routes)],
    declarations: [AppComponent, MovieComponent, SignageComponent],
    providers: [Cyclical],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent);
  }
}