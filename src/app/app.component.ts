import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // selected = 'option2';
  selectedValue: string = " ";
  selected: string;
  answer: string;

  stocks = [
    {value: ' MMM', viewValue: '3M'},
    {value: ' AXP', viewValue: 'American Express'},
    {value: ' AAPL', viewValue: 'Apple'}
  ];

  correlators = [
    {value: ' Gold USD', correlationVariable: 'Gold'},
    {value: ' Silver USD', correlationVariable: 'Silver'},
    {value: ' Copper USD', correlationVariable: 'Copper'}
  ];

  showValues() {
    this.answer = this.selected;
    console.log(this.answer);
    this.answer = null;
  }
 


}


