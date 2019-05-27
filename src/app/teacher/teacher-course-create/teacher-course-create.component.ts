import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from'@angular/router';
import {Service} from '../../service.service'
@Component({
  selector: 'app-teacher-course-create',
  templateUrl: './teacher-course-create.component.html',
  styleUrls: ['./teacher-course-create.component.css']
})
export class TeacherCourseCreateComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder , private service :Service ,private router :Router) {
  }
  joinForm: FormGroup;
  ngOnInit() {
    this.joinForm = this._formBuilder.group({
      'coursename': ['', [Validators.required]],
      'coursecode': ['', [Validators.required, Validators.minLength(6)]],
      'coursemarks': ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  login(){
    console.log(this.joinForm.value);
  }
}
