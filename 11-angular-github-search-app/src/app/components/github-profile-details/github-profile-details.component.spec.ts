import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProfileDetailsComponent } from './github-profile-details.component';

describe('GithubProfileDetailsComponent', () => {
  let component: GithubProfileDetailsComponent;
  let fixture: ComponentFixture<GithubProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubProfileDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
