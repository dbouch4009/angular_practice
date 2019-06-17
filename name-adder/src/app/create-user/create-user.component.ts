import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  signUpForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'userName': new FormControl(null, Validators.required),
        'firstName': new FormControl(null, Validators.required),
        'lastName': new FormControl(null, [Validators.required, Validators.email])
      }),
      'role': new FormControl(null)
    });

    this.signUpForm.patchValue({
      'role':['reader','creator']
    })

  }

  onSubmit(){
    console.log(this.signUpForm.value);
  }

}
