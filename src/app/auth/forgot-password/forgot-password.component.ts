import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.forgotPassword(this.email).subscribe(
      () => {
        alert('Password reset link has been sent to your email.');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error sending password reset link', error);
        alert('Error sending password reset link');
      }
    );
  }
}
