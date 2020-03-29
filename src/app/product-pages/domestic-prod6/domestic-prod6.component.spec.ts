import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticProd6Component } from './domestic-prod6.component';

describe('DomesticProd6Component', () => {
  let component: DomesticProd6Component;
  let fixture: ComponentFixture<DomesticProd6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticProd6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticProd6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
