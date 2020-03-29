import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticProd3Component } from './domestic-prod3.component';

describe('DomesticProd3Component', () => {
  let component: DomesticProd3Component;
  let fixture: ComponentFixture<DomesticProd3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticProd3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticProd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
