import { Component, OnInit } from '@angular/core';
import {LecturesService} from '../../services/lectures.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  public subjects: any[];
  constructor(private lectureService: LecturesService) { }

  ngOnInit() {
    this.subjects = this.lectureService.subjects;
  }

}
