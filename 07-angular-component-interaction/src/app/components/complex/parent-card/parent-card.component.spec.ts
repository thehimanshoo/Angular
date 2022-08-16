import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCardComponent } from './parent-card.component';

describe('ParentCardComponent', () => {
  let component: ParentCardComponent;
  let fixture: ComponentFixture<ParentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
