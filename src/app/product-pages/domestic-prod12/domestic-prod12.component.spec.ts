import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticProd12Component } from './domestic-prod12.component';

describe('DomesticProd12Component', () => {
  let component: DomesticProd12Component;
  let fixture: ComponentFixture<DomesticProd12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticProd12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticProd12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
