import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';




@Component({
  selector: 'app-main-event-card',
  templateUrl: './main-event-card.component.html',
  styleUrls: ['./main-event-card.component.css']
})


export class MainEventCardComponent implements OnInit {
  // *** NOTES *** Imported from Appcomponent - the two securities to be set in order to correlate
  @Input() baseSelection: string;
  @Input() correlationSelection: string;
  // *** NOTES *** Imported from AppComponenet the start and end dates for each of the two securities in order to correlate
  @Input() baseStartDate: string;
  @Input() baseEndDate: string;
  @Input() correlatorStartDate: string;
  @Input() correlatorEndDate: string;
  @Input() allParameterValues: object;



  constructor() { 

  }
    
  ngOnInit() {
    
  }

}
