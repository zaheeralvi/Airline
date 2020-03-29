import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticProd8Component } from './domestic-prod8.component';

describe('DomesticProd8Component', () => {
  let component: DomesticProd8Component;
  let fixture: ComponentFixture<DomesticProd8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticProd8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticProd8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
