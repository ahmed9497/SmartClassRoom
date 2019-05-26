import { Component, OnInit } from '@angular/core';
import {LecDataService} from '../../services/lec-data.service';

@Component({
  selector: 'app-student-join-course',
  templateUrl: './student-join-course.component.html',
  styleUrls: ['./student-join-course.component.css']
})
export class StudentJoinCourseComponent implements OnInit {
  public lecdata: any[];
  currentTime;
  constructor(private lecdataService: LecDataService) { }

  ngOnInit() {
      this.lecdata = this.lecdataService.lecdata; // data display
      const today = new Date(); // current date time picker function
      const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
      const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      this.currentTime = date + ' ' + time;
    }
  }









