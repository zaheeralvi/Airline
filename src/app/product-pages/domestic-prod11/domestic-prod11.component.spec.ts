import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticProd11Component } from './domestic-prod11.component';

describe('DomesticProd11Component', () => {
  let component: DomesticProd11Component;
  let fixture: ComponentFixture<DomesticProd11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticProd11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticProd11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
