import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  firstOperand: number = 0;
  secondOperand: number = 0;
  operator: string = '+';
  result: number = 0;

  constructor() { }

  ngOnInit() {
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.firstOperand + this.secondOperand;
        break;
      case '-':
        this.result = this.firstOperand - this.secondOperand;
        break;
      case '*':
        this.result = this.firstOperand * this.secondOperand;
        break;
      case '/':
        this.result = this.firstOperand / this.secondOperand;
        break;
    }
  }
}