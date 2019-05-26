import { Component, OnInit } from '@angular/core';
import {LecturesService} from '../../services/lectures.service';

@Component({
  selector: 'app-student-subjects',
  templateUrl: './student-subjects.component.html',
  styleUrls: ['./student-subjects.component.css']
})
export class StudentSubjectsComponent implements OnInit {
  public subjects: any[];
  constructor(private lectureService: LecturesService) { }

  ngOnInit() {
    this.subjects = this.lectureService.subjects;
  }

}
