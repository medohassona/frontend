import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string | undefined;
  password: string | undefined;

  constructor(private router: Router, private authService: AuthService) {}

  onSignup() {
    this.authService.register({ email: this.email, password: this.password }).subscribe(
      () => this.router.navigate(['/login']),
      error => console.error('Signup failed', error)
    );
  }
}
