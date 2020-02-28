import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  public getNumber(v: string){
    if(this.waitForSecondNumber){
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }
    else {
      if(this.currentNumber === '0'){
        this.currentNumber = v;
      }
      else {
        this.currentNumber += v;
      }
    }
  }

  public getDecimal(){
    if(!this.currentNumber.includes('.')){
      this.currentNumber += '.';
    }
  }

  private doCalculation(op1, op2){
    switch(op1){
      case '+':
        return this.firstOperand += op2;
      case '-':
        return this.firstOperand -= op2;
      case '*':
        return this.firstOperand *= op2;
      case '/':
        return this.firstOperand /= op2;
      case '=':
        return op2;
    }
  }

  public getOperation(op: string){
    if(this.firstOperand === null){
      this.firstOperand = +this.currentNumber;
    }
    else if(this.operator){
      const result = this.doCalculation(this.operator, +this.currentNumber);
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
  }
  
  public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
