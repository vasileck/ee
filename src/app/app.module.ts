

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  declarations: [AppComponent, ItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
