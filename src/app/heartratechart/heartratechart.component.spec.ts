import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartratechartComponent } from './heartratechart.component';

describe('HeartratechartComponent', () => {
  let component: HeartratechartComponent;
  let fixture: ComponentFixture<HeartratechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartratechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartratechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
