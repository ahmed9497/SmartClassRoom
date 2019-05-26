import { Component, OnInit } from '@angular/core';
import {LecturesService} from '../../services/lectures.service';

@Component({
  selector: 'app-teacher-subjects',
  templateUrl: './teacher-subjects.component.html',
  styleUrls: ['./teacher-subjects.component.css']
})
export class TeacherSubjectsComponent implements OnInit {
  public subjects: any[];
  constructor(private lectureService: LecturesService) { }

  ngOnInit() {
    this.subjects = this.lectureService.subjects;
  }
}
