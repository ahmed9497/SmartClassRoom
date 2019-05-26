import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private _formBuilder: FormBuilder) {
  }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      'email': ['', [Validators.email, Validators.required]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    console.log(this.loginForm.value);
  }

  // openSnackBar(message: string, action: string) {
  //   this.snackBar.open(message, action, {
  //     duration: 2000,
  //   });
  // }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


}
