import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticProd9Component } from './domestic-prod9.component';

describe('DomesticProd9Component', () => {
  let component: DomesticProd9Component;
  let fixture: ComponentFixture<DomesticProd9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticProd9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticProd9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
