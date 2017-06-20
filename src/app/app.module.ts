import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { HeaderComponent }  from './components/header/header.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
