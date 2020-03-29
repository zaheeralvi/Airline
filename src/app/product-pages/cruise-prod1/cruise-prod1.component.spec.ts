import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseProd1Component } from './cruise-prod1.component';

describe('CruiseProd1Component', () => {
  let component: CruiseProd1Component;
  let fixture: ComponentFixture<CruiseProd1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruiseProd1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseProd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
