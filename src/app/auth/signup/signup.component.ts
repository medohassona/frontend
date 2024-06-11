import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  password: string | undefined;
  gender: string | undefined;

  constructor(private router: Router, private authService: AuthService) {}

  onSignup() {
    this.authService.register({firstname: this.firstname, lastname: this.lastname, email: this.email,  gender: this.gender, password: this.password, role: 'USER' }).subscribe(
      () => this.router.navigate(['/login']),
      error => console.error('Signup failed', error)
    );
  }
}
