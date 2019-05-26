import { Component, OnInit } from '@angular/core';
import {AssignmentService} from '../../services/assignment.service';

@Component({
  selector: 'app-student-assignment',
  templateUrl: './student-assignment.component.html',
  styleUrls: ['./student-assignment.component.css']
})
export class StudentAssignmentComponent implements OnInit {
public assignments: any[]; // any is type of obj in java
currentTime;  // date time variable
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
