import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseProd3Component } from './cruise-prod3.component';

describe('CruiseProd3Component', () => {
  let component: CruiseProd3Component;
  let fixture: ComponentFixture<CruiseProd3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruiseProd3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseProd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
