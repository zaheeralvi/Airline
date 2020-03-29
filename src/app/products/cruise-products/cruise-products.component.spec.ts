import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseProductsComponent } from './cruise-products.component';

describe('CruiseProductsComponent', () => {
  let component: CruiseProductsComponent;
  let fixture: ComponentFixture<CruiseProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruiseProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
