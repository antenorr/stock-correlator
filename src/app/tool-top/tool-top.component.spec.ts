import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolTopComponent } from './tool-top.component';

describe('ToolTopComponent', () => {
  let component: ToolTopComponent;
  let fixture: ComponentFixture<ToolTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
