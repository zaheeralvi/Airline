import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticProd2Component } from './domestic-prod2.component';

describe('DomesticProd2Component', () => {
  let component: DomesticProd2Component;
  let fixture: ComponentFixture<DomesticProd2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticProd2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticProd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
