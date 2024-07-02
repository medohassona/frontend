import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupInfoComponent } from './signup-info.component';

describe('SignupInfoComponent', () => {
  let component: SignupInfoComponent;
  let fixture: ComponentFixture<SignupInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupInfoComponent]
    });
    fixture = TestBed.createComponent(SignupInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
