import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInServiceService } from 'src/app/services/sign-in-service/sign-in-service.service';
import { User } from 'src/app/services/sign-in-service/sign-in-service.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {
  isLoading: boolean = false;
  signUpForm: FormGroup;

  get firstName() {
    if(!this?.signUpForm) {
      return '';
    }
    return this.signUpForm.get('firstName');
  }
  
  get lastName() {
    if(!this?.signUpForm) {
      return '';
    }
    return this.signUpForm.get('lastName');
  }

  get user(): User {
    return this.signUpForm.value;
  }

  constructor(private fb: FormBuilder, private service: SignInServiceService, private router: Router) {
    this.signUpForm = this.fb.group({
      firstName: ['jason', Validators.required],
      lastName: ['van der meijden', Validators.required],
      email: ['jason.vandermeijden@gmail.com', [Validators.required, Validators.email]],
      password: ['TestPword', [Validators.required, Validators.minLength(8), passwordValidator.bind(this)]]
    });

  }


  onSubmit() {
    this.isLoading = true;
    this.service.createUser(this.user)
      .then(response => {
        if (!response.ok) {
          this.router.navigate(['/user', 'failed']);
          return;
        }
        return response.json(); 
      })
      .then(data => {
        if (!data.ok) {
          this.router.navigate(['/user', 'failed']);
          return;
        }
        this.router.navigate(['/user', 'successful']);
        this.isLoading = false;
      })
      .catch(error => {
        console.error("There was a problem with the network request:", error);
        this.router.navigate(['/user', 'failed2']);
        this.isLoading = false;
      });
  }

}

function passwordValidator(this: any, control: FormControl) {

    const firstNameControl = this.firstName;
    const lastNameControl = this.lastName;
  
    if (!firstNameControl || !lastNameControl) {
      return null;
    }
  
    const firstName = firstNameControl.value;
    const lastName = lastNameControl.value;
    const password = control.value;
  
    if (password.length < 8) {
      return { invalidPasswordLength: true };
    }
  
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      return { invalidPasswordCase: true };
    }
  
    if (password.toLowerCase().includes(firstName.toLowerCase()) || password.toLowerCase().includes(lastName.toLowerCase())) {
      return { invalidPasswordInvalidWords: true };
    }
  
    return null;
  }