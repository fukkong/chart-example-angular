import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyscalechartComponent } from './bodyscalechart.component';

describe('BodyscalechartComponent', () => {
  let component: BodyscalechartComponent;
  let fixture: ComponentFixture<BodyscalechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyscalechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyscalechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
