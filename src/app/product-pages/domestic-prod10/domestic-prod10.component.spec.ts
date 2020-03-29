import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticProd10Component } from './domestic-prod10.component';

describe('DomesticProd10Component', () => {
  let component: DomesticProd10Component;
  let fixture: ComponentFixture<DomesticProd10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticProd10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticProd10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
