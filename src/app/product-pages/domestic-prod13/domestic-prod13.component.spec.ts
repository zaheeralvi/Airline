import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticProd13Component } from './domestic-prod13.component';

describe('DomesticProd13Component', () => {
  let component: DomesticProd13Component;
  let fixture: ComponentFixture<DomesticProd13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticProd13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticProd13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
