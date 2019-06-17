import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;  //different from TD approach, synced from HTML file
  forbiddenUsernames = ['fag','homo'];

  ngOnInit(){
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNamesValidation.bind(this)]),  //data validation happens here instead of TD HTML file
        'email': new FormControl(null, [Validators.email, Validators.required], this.forbiddenEmails),        
      }),
      'gender': new FormControl('male', Validators.required),
      'hobbies': new FormArray([
        //no hobbies at the beginning
      ])
    });
    this.signUpForm.valueChanges.subscribe(
      (value) => console.log(value)
    );
    this.signUpForm.statusChanges.subscribe(
      (value) => console.log(`Ur status: ${value}.`)
    );
    this.signUpForm.setValue({
      'userData': {
        'username': 'Max test',
        'email': 'damian@bouch.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signUpForm.patchValue({
      'userData': {
        'username': 'Damian test',
      },
    });
  }

  onSubmit(){
    console.log(this.signUpForm.value);
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray> this.signUpForm.get('hobbies')).push(control);  //casting in TS
  }

  //example return of TS key-value: {nameIsForbidden: true}
  forbiddenNamesValidation(control: FormControl): {[s: string]: boolean}{
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};         
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true});  //check fail
        } else{
          resolve(null);  //check pass
        }
      }, 1500);
    });
    return promise;
  }
}
