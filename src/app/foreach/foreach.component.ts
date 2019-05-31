import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foreach',
  templateUrl: './foreach.component.html',
  styleUrls: ['./foreach.component.css']
})
export class ForeachComponent implements OnInit {

  colors = ['red', 'blue', 'green'];
  numbers = [1, 2, 3, 4, 5];
  sumResult = 0;

  images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
  areas = [];

  constructor() { }

  ngOnInit() {
    // this.forLoop();

    // this.foreachLoop();

    // console.log(this.sumNumbers());

    // this.sumNumbers2();

    // console.log(this.sumResult);

    // this.calculateArea();
    // console.log('area []', this.areas);
  }

  forLoop(): void {
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.colors.length; i++) {
      console.log(this.colors[i]);
    }
  }


  foreachLoop(): void {
    this.colors.forEach(color => {
      console.log(color);
    });
  }

sumNumbers(): number {
  let sum = 0;

  this.numbers.forEach(num => {
    sum = sum + num;
  });

  return sum;
}


sumNumbers2() {
  this.numbers.forEach(number => this.adder(number)); // this.adder : by refrence
}

adder(num: number) {
  this.sumResult = num + this.sumResult;
}


calculateArea() {
  this.images.forEach((image) => {
    this.areas.push(image.height * image.width);
});
}
}
