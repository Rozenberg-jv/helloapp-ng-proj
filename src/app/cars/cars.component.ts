import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  canAddCar = false;
  inputText = '';
  isEmpty: boolean = this.inputText === '';
  cars = ['Ford', 'Audi', 'BMW', 'ZAZ'];
  items = [
    {id: 1, name: 'item 1'},
    {id: 2, name: 'item 2'},
    {id: 3, name: 'item 3'},
    {id: 4, name: 'item 4'}
  ];
  dates = [
    new Date(2015, 3, 2),
    new Date(2013, 1, 11),
    new Date(1952, 12, 30),
    new Date(2012, 2, 5),
    new Date(1995, 23, 15),
    new Date(2019, 3, 11),
  ];

  constructor() {
    setTimeout(() => {
      this.canAddCar = true;
    }, 4000);
  }

  clear() {
    this.updateText('');
  }

  updateText(value) {
    this.inputText = value;
    this.isEmpty = value === '';
  }

  addCar() {
    this.cars.push(this.inputText);
    this.updateText('');
  }
}
