import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: User | undefined;
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  password: string | undefined;
  gender: string | undefined;
  isAgreed: boolean = false;
  isSignedUp: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  onSignup() {
    if (this.isAgreed){
      this.authService.register({firstname: this.firstname, lastname: this.lastname, email: this.email,  gender: this.gender, password: this.password, role: 'USER' }).subscribe(
        () => {
          this.isSignedUp = true;
          console.log("signed up")  ;
          //this.router.navigate(['/login']);
        },
        error => console.error('Signup failed', error)
      );
    }
  }

  goToinfo(){
    this.router.navigate(['/signup-info']);
  }

  agreed() {
    this.isAgreed = true;
  }
}
