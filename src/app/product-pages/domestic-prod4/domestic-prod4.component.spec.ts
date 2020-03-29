import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticProd4Component } from './domestic-prod4.component';

describe('DomesticProd4Component', () => {
  let component: DomesticProd4Component;
  let fixture: ComponentFixture<DomesticProd4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticProd4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticProd4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
