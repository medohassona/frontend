import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAboutComponent } from './signup-about.component';

describe('SignupAboutComponent', () => {
  let component: SignupAboutComponent;
  let fixture: ComponentFixture<SignupAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupAboutComponent]
    });
    fixture = TestBed.createComponent(SignupAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
