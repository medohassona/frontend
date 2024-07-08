import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user.model";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-signup-about',
  templateUrl: './signup-about.component.html',
  styleUrls: ['./signup-about.component.css']
})
export class SignupAboutComponent implements OnInit{

  signupForm: FormGroup = new FormGroup({
    aboutMe: new FormControl(''),
    dontLikeToHaveInPartner: new FormControl(''),
    whenDoYouWantToGetMarried: new FormControl(''),
    acceptsPolygamy: new FormControl(false),
  });

  user: User | null | undefined;
  submitted = false;

  constructor(private router: Router,private userService: UserService, private formBuilder: FormBuilder,private authService: AuthService) {

  }

  ngOnInit(): void {
    this.user = this.userService.user;
    if (!this.userService.user) {
      console.log('user null');
      this.userService.updateLocalUser().subscribe({
        next:() => {
          console.log('User updated successfully');
        },
        error:error => {
          this.authService.logout();
          console.error('Error updating user:', error);
          // Handle error appropriately, e.g., navigate to login or show an error message
        },
        complete: () => {
          this.user = this.userService.user;
          console.log(this.user);
        }
      });
    }
    console.log("from sign info");
    console.log(this.userService.user);

    this.signupForm = this.formBuilder.group(
      {
        aboutMe: ['', Validators.required],
        dontLikeToHaveInPartner: [''],
        whenDoYouWantToGetMarried: [''],
        acceptsPolygamy: [''],
      });
  }

  onNext() {
    this.submitted = true;
    console.log("go to next sign info");
    console.log(this.userService.user);
    console.log(this.signupForm);
    console.log(this.user);
    console.log(!this.user);
    if (this.signupForm.valid && this.user) {
      console.log("go to next sign info in updating ...");
      this.user.aboutMe = this.signupForm.controls['aboutMe'].value;
      this.user.dontLikeToHaveInPartner = this.signupForm.controls['dontLikeToHaveInPartner'].value;
      this.user.whenDoYouWantToGetMarried = this.signupForm.controls['whenDoYouWantToGetMarried'].value;
      this.user.acceptsPolygamy = this.signupForm.controls['acceptsPolygamy'].value != 'NO';
      this.userService.updateUser(this.user).subscribe({
        next:response => {
          console.log('User updated successfully', response);
          this.router.navigate(['/home']);
        },
        error:error => {
          console.error('Error updating user', error);
        }
      });
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

}
