import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  

  answer: string;

// *** NOTES *** the two securities to be set in order to correlate
  baseSelection: string ;
  correlationSelection: string;

  // *** NOTES *** the start and end dates for each of the two securities in order to correlate
  baseStartDate: string;
  baseEndDate: string;
  correlatorStartDate: string;
  correlatorEndDate: string;

  allParameterValues: object;



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
    //this.answer = this.correlationSelection;
    let allParameterValues = {
      baseSelection : this.baseSelection,
      correlationSelection: this.correlationSelection,
      baseStartDate: this.baseStartDate,
      baseEndDate: this.baseEndDate,
      correlatorStartDate: this.correlatorStartDate,
      correlatorEndDate: this.correlatorEndDate
    }
    console.log(allParameterValues);
  
    //this.answer = null;
  }
 


}


