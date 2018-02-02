import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEventCardComponent } from './main-event-card.component';

describe('MainEventCardComponent', () => {
  let component: MainEventCardComponent;
  let fixture: ComponentFixture<MainEventCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEventCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
