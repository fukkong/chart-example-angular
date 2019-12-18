import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitglucosechartComponent } from './splitglucosechart.component';

describe('SplitglucosechartComponent', () => {
  let component: SplitglucosechartComponent;
  let fixture: ComponentFixture<SplitglucosechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitglucosechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitglucosechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
