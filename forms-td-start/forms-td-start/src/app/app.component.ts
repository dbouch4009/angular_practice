import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signUpForm: NgForm;    //local reference to 'f'
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male','female'];
  user={
    username: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    gender: ''
  }

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signUpForm.form.patchValue({  // could also be setValue for setting every value of the form
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit(){
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secretQ;
    this.user.secretAnswer = this.signUpForm.value.secretA;
    this.user.gender = this.signUpForm.value.gender;
    this.submitted = true;

    this.signUpForm.reset();    //resetting state of signupform
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

}
