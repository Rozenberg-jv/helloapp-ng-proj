import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carName = '';
  carYear = 2019;
  @Output('onAddCar') carEmitter = new EventEmitter<{ name: string, year: number }>();

  constructor() {
  }

  ngOnInit() {
  }

  addCar() {
    this.carEmitter.emit({
      name: this.carName,
      year: this.carYear
    });

    this.carName = '';
    this.carYear = 2019;
  }

}
