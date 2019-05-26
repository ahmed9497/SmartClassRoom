import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-attendance',
  templateUrl: './teacher-attendance.component.html',
  styleUrls: ['./teacher-attendance.component.css']
})
export class TeacherAttendanceComponent implements OnInit {
  elementType: 'https://www.letsboot.com'; // | 'canvas' | 'img' = 'url';
  value = '';

  constructor() {
  }

  ngOnInit() {
  }

}
