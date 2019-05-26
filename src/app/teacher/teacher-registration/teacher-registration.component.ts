import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from'@angular/router'
import {Service} from '../../service.service'
@Component({
  selector: 'app-teacher-registration',
  templateUrl: './teacher-registration.component.html',
  styleUrls: ['./teacher-registration.component.css']
})
export class TeacherRegistrationComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder ,private service :Service ,private router :Router) { }

  registrationForm: FormGroup;

  ngOnInit() {
  this.registrationForm = this._formBuilder.group({
    'email': ['', [Validators.email, Validators.required]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
    'fName': ['', Validators.required], // abhi ye m n fName ka formControl bnaya a na
    'lName': ['', Validators.required],
    'address': ['', Validators.required],
    'cell': ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    'gender': ['male', Validators.required],
  });
  }

  registration() {
   // console.log(this.registrationForm.value);
    this.service.registerTeacher(this.registrationForm.value);
    this.router.navigate(['./teacher-login']);
  }

  get fName() {
    return this.registrationForm.get('fName');
  }
  get lName() {
    return this.registrationForm.get('lName');
  }
  get address() {
    return this.registrationForm.get('address');
  }
  get cell() {
    return this.registrationForm.get('cell');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
}
