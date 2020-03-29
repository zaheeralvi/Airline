import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticProd7Component } from './domestic-prod7.component';

describe('DomesticProd7Component', () => {
  let component: DomesticProd7Component;
  let fixture: ComponentFixture<DomesticProd7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticProd7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticProd7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
