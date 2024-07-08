import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string | undefined;
  password: string | undefined;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }

  onLogin() {
    console.log("**** cred ******" + this.email +" - " + this.password);
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      () => this.router.navigate(['/home']),
      error => console.error('Login failed', error)
    );
  }


}
