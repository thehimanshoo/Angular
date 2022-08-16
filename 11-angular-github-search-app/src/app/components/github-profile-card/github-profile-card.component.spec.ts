import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProfileCardComponent } from './github-profile-card.component';

describe('GithubProfileCardComponent', () => {
  let component: GithubProfileCardComponent;
  let fixture: ComponentFixture<GithubProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
