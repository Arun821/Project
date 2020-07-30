import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDoctorsComponent } from './user-doctors.component';

describe('UserDoctorsComponent', () => {
  let component: UserDoctorsComponent;
  let fixture: ComponentFixture<UserDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
