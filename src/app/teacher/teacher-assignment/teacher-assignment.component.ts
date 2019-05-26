import { Component, OnInit } from '@angular/core';
import {AssignmentService} from '../../services/assignment.service';

@Component({
  selector: 'app-teacher-assignment',
  templateUrl: './teacher-assignment.component.html',
  styleUrls: ['./teacher-assignment.component.css']
})
export class TeacherAssignmentComponent implements OnInit {
public assignments: any[]; // any is type of obj in java
  currentTime; // date time variable
  constructor(private assignmentService: AssignmentService) { } // dependency injection of service

  fileuploads(event) {       // fileupload function
  }
  ngOnInit() {
    this.assignments = this.assignmentService.assignments; // data display
    const today = new Date(); // current date time picker function
    const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.currentTime = date + ' ' + time;
  }

}
