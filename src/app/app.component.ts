import { Component } from '@angular/core';
import { ApplicationModel } from './models/application.model';
import {Http} from '@angular/http';
@Component({
  selector: 'my-app',
  template: `<header-component></header-component><h1>Hello {{name}}</h1>`,
})
export class AppComponent  { 
  name = 'Angular';
  constructor(http:Http){
    let model: ApplicationModel = new ApplicationModel({name:'Angular'},{}, http);
    model.save();
  }
}
