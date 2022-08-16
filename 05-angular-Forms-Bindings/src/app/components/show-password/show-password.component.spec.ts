import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPasswordComponent } from './show-password.component';

describe('ShowPasswordComponent', () => {
  let component: ShowPasswordComponent;
  let fixture: ComponentFixture<ShowPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
