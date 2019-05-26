import { Component, OnInit } from '@angular/core';
import {LecturesService} from '../../services/lectures.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  public subjects: any[]; // Obj of type any in java
  constructor(private lectureService: LecturesService) { } // Dependency Injection of Services created

   function;

  ngOnInit() {
    this.subjects = this.lectureService.subjects; // Data Display
  }
}
