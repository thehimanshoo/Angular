import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountRangeComponent } from './amount-range.component';

describe('AmountRangeComponent', () => {
  let component: AmountRangeComponent;
  let fixture: ComponentFixture<AmountRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
