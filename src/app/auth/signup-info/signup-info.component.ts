import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Validation from "../../utils/validations";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-signup-info',
  templateUrl: './signup-info.component.html',
  styleUrls: ['./signup-info.component.css']
})
export class SignupInfoComponent implements OnInit{

  signupForm: FormGroup = new FormGroup({
    birthday: new FormControl(''),
    educationLevel: new FormControl(''),
    workSituation: new FormControl(''),
    financialSituation: new FormControl(''),
    healthSituation: new FormControl(''),
    religion: new FormControl(''),
    typeOfClothes: new FormControl(''),
  });

  isValid: boolean = true;
  user: User | null | undefined;
  birthday: Date | undefined;

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
    this.signupForm = this.formBuilder.group(
      {
        birthday: [this.user?.birthday, Validators.required],
        educationLevel: ['', Validators.required],
        workSituation: [''],
        financialSituation: [''],
        healthSituation: [''],
        religion: [''],
        typeOfClothes: [''],
      });
    console.log("from sign info");
    console.log(this.userService.user);
  }

  onNext() {
    console.log("subbmitted sign info");
    console.log(this.user);
    console.log(this.signupForm);
    if (this.signupForm.valid && this.user) {
      this.user.birthday = this.signupForm.controls['birthday'].value;
      this.user.educationLevel = this.signupForm.controls['educationLevel'].value;
      this.user.workSituation = this.signupForm.controls['workSituation'].value;
      this.user.healthSituation = this.signupForm.controls['healthSituation'].value;
      this.user.religion = this.signupForm.controls['religion'].value;
      console.log("subbmitted sign info");
      this.userService.updateUser(this.user).subscribe({
        next:response => {
          console.log('User updated successfully', response);
          this.router.navigate(['/signup-about']);
        },
        error:error => {
          console.error('Error updating user', error);
        }
      });
    }
    console.log("go to next sign info");
    console.log(this.userService.user);
  }



}
