import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../entities/student';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) {
  }

  registrationForm: FormGroup;
  student: Student;

  ngOnInit() {
    this.registrationForm = this._formBuilder.group({
      'email': ['', [Validators.email , Validators.required]],
      'password': ['', [Validators.required , Validators.minLength(6)]],
      'fName': ['', Validators.required],
      'lName': ['', Validators.required],
      'gender': ['male', Validators.required],
      'registrationNo': ['', Validators.required]
    });
  }
  registration() {
    console.log(this.registrationForm.value);
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get fName() {
    return this.registrationForm.get('fName');
  }
  get lName() {
    return this.registrationForm.get('lName');
  }
  get registrationNo() {
    return this.registrationForm.get('registrationNo');
  }

  // console p jo error ara a uski smjhh aari a?
  // iss class mn kahan defined h? import hua h?
  // wo apni class mn defined h, yhan immport e ni hua aur iskay html mn user hora a, iss wja c error throw hora a
  //
  // errors kahan ni show kr rha?
  //main jb run krta hn to validation nae dy frga
}
