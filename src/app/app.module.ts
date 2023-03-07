import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './UI/input/input.component';
import { SelectComponent } from './UI/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
