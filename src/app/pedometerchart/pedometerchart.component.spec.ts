import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedometerchartComponent } from './pedometerchart.component';

describe('PedometerchartComponent', () => {
  let component: PedometerchartComponent;
  let fixture: ComponentFixture<PedometerchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedometerchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedometerchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
