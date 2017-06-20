import { Component } from '@angular/core';
import { HeaderModel } from './models/header.model';
import {Http} from '@angular/http';
@Component({
  selector: 'header-component',
  template: `<h1>Soy el componente de header</h1>`,
})
export class HeaderComponent  { 
  name = 'Angular';
  constructor(http:Http){
    let model: HeaderModel = new HeaderModel({name:'Angular'},{}, http);
    model.save();
  }
}
