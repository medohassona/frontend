import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user.model";
import {TemplateHelperService} from "../../services/template-helper.service";
import {UserService} from "../../services/user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Validation from "../../utils/validations";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit {

  signupForm: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });

  user: User | undefined;
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  password: string | undefined;
  gender: string | undefined;
  isAgreed: boolean = false;
  isSignedUp: boolean = false;

  constructor(private router: Router, private authService: AuthService,
              private templateHelper: TemplateHelperService, private userService: UserService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
    this.signupForm = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        gender: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      });
  }

  ngAfterViewInit() {
    this.templateHelper.triggerDOMContentLoaded();
  }


  onSignup() {
    if (this.isAgreed){
      this.authService.register({firstname: this.firstname, lastname: this.lastname, email: this.email,  gender: this.gender, password: this.password, role: 'USER' }).subscribe(
        response => {
          console.log("registered response");
          this.userService.setLocalUser(response.user);
          this.isSignedUp = true;
          console.log("signed up");
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
