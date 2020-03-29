import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateSliderComponent } from './corporate-slider.component';

describe('CorporateSliderComponent', () => {
  let component: CorporateSliderComponent;
  let fixture: ComponentFixture<CorporateSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
