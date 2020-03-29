import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseProd4Component } from './cruise-prod4.component';

describe('CruiseProd4Component', () => {
  let component: CruiseProd4Component;
  let fixture: ComponentFixture<CruiseProd4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruiseProd4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseProd4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
