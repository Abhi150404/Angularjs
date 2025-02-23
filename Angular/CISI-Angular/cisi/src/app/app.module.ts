import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Pipe1Pipe } from './Pipes/pipe-1.pipe';
import { NumberToWordsPipe } from './Pipes/number-to-words.pipe';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    Pipe1Pipe,
    NumberToWordsPipe,
    DetailsComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
