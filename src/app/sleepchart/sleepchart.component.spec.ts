import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepchartComponent } from './sleepchart.component';

describe('SleepchartComponent', () => {
  let component: SleepchartComponent;
  let fixture: ComponentFixture<SleepchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
