import { Component, OnInit } from '@angular/core';
import {Student} from '../entities/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
public student = new Student();
  constructor() { }

  ngOnInit() {
  }

}
