import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from'@angular/router';
import {Service} from '../../service.service'
@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder , private service :Service ,private router :Router) {
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
    this.service.teacherLogin(this.loginForm.value);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
