import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseProd2Component } from './cruise-prod2.component';

describe('CruiseProd2Component', () => {
  let component: CruiseProd2Component;
  let fixture: ComponentFixture<CruiseProd2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruiseProd2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseProd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
