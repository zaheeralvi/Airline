import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticProd5Component } from './domestic-prod5.component';

describe('DomesticProd5Component', () => {
  let component: DomesticProd5Component;
  let fixture: ComponentFixture<DomesticProd5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticProd5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticProd5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
