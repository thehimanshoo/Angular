import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAppComponent } from './contact-app.component';

describe('ContactAppComponent', () => {
  let component: ContactAppComponent;
  let fixture: ComponentFixture<ContactAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
