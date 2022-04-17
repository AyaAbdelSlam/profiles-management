import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileFactsComponent } from './user-profile-facts.component';

describe('UserProfileFactsComponent', () => {
  let component: UserProfileFactsComponent;
  let fixture: ComponentFixture<UserProfileFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileFactsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
