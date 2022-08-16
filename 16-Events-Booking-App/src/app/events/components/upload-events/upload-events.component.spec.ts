import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEventsComponent } from './upload-events.component';

describe('UploadEventsComponent', () => {
  let component: UploadEventsComponent;
  let fixture: ComponentFixture<UploadEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
