import { Component, OnInit } from '@angular/core';
import {Teacher} from '../entities/teacher';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
public teacher = new Teacher();
  constructor() { }

  ngOnInit() {
  }

}
