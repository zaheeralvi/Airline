import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalProductsComponent } from './international-products.component';

describe('InternationalProductsComponent', () => {
  let component: InternationalProductsComponent;
  let fixture: ComponentFixture<InternationalProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
