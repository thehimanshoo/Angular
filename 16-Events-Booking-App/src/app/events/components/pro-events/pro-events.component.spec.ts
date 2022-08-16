import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProEventsComponent } from './pro-events.component';

describe('ProEventsComponent', () => {
  let component: ProEventsComponent;
  let fixture: ComponentFixture<ProEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
