import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // selected = 'option2';
  selectedValue: string;

  foods = [
    {value: 'Symbol: MMM', viewValue: '3M'},
    {value: 'Symbol: AXP', viewValue: 'American Express'},
    {value: 'Symbol: AAPL', viewValue: 'Apple'}
  ];

}
