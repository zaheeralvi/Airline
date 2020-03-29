import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticProductsComponent } from './domestic-products.component';

describe('DomesticProductsComponent', () => {
  let component: DomesticProductsComponent;
  let fixture: ComponentFixture<DomesticProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
