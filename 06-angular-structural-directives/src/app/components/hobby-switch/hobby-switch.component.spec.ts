import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbySwitchComponent } from './hobby-switch.component';

describe('HobbySwitchComponent', () => {
  let component: HobbySwitchComponent;
  let fixture: ComponentFixture<HobbySwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbySwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbySwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
