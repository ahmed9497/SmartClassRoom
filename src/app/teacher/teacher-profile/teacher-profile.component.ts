import { Component, OnInit } from '@angular/core';
import {LecturesService} from '../../services/lectures.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from'@angular/router';
import {Service} from '../../service.service'

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  public subjects: any[];
  constructor(private _formBuilder: FormBuilder , private service :Service ,private router :Router) {
  }
  // ngOnInit() {
  //   this.subjects = this.lectureService.subjects;
  // }
  courseForm: FormGroup;
  ngOnInit() {
    this.courseForm = this._formBuilder.group({
      'coursename': ['', [Validators.required]],
      'coursecode': ['', [Validators.required, Validators.minLength(6)]],
      'coursemarks': ['', [Validators.required, Validators.minLength(6)]],
    });

  }
  createcourse(){
   // console.log(this.courseForm.value);
    this.service.createCourse(this.courseForm.value);
  }
  signout(){
    console.log("signout");
    this.service.teachersignOut();
  }
}
