import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

import {Breakpoints} from '@angular/cdk/layout';

console.log('Web ' + Breakpoints.Web);
console.log('WebLandscape ' + Breakpoints.WebLandscape);
console.log('WebPortrait ' + Breakpoints.WebPortrait);

console.log('Tablet ' + Breakpoints.Tablet);
console.log('TabletPortrait ' + Breakpoints.TabletPortrait);
console.log('TabletLandscape ' + Breakpoints.TabletLandscape);

console.log('Handset ' + Breakpoints.Handset);
console.log('HandsetLandscape ' + Breakpoints.HandsetLandscape);
console.log('HandsetPortrait ' + Breakpoints.HandsetPortrait);

console.log('XSmall ' + Breakpoints.XSmall);
console.log('Small ' + Breakpoints.Small);
console.log('Medium ' + Breakpoints.Medium);
console.log('Large ' + Breakpoints.Large);
console.log('XLarge ' + Breakpoints.XLarge);

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
