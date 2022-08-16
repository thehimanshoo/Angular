import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeEventsComponent } from './free-events.component';

describe('FreeEventsComponent', () => {
  let component: FreeEventsComponent;
  let fixture: ComponentFixture<FreeEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
