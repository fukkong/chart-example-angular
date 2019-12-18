import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucosechartComponent } from './glucosechart.component';

describe('GlucosechartComponent', () => {
  let component: GlucosechartComponent;
  let fixture: ComponentFixture<GlucosechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlucosechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlucosechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
