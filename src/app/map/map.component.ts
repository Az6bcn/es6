import { Component, OnInit } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  numbers = [1 , 2 , 3];
  doubledNumbers = [];

  cars = [
    {model: 'Buick', price: 'CHEAP'},
    {model: 'Camaro', price: 'expensive'},
  ];


  constructor() { }

  ngOnInit() {
    this.doubleNumbers();


    console.log(this.map());
    console.log('car prices are: ', this.getCarsPrices());
  }

  doubleNumbers() {
    for(let i = 0; i < this.numbers.length; i++) {
      this.doubledNumbers.push(this.numbers[i] * 2);
    }
    console.log(this.doubledNumbers);
  }

  map(): Array<number> {
    return this.numbers.map(num => num * 2);
  }


  getCarsPrices(): Array<string> {
    return this.cars.map( car => car.price);
  }
}
