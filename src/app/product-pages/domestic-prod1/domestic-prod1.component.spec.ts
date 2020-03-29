import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticProd1Component } from './domestic-prod1.component';

describe('DomesticProd1Component', () => {
  let component: DomesticProd1Component;
  let fixture: ComponentFixture<DomesticProd1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticProd1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticProd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
