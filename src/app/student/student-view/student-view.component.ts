import { Component, OnInit } from '@angular/core';
import {Student} from '../../entities/student';
import {StudentService} from '../../services/student.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  public students:  Student[];
  constructor(private studentSerive: StudentService, private  router: Router, private  rout: ActivatedRoute) { }

  ngOnInit() {
    this.students = this.studentSerive.students;
  }
  showStudent(std): void {
    console.log(std);
    this.router.navigate(['../profile'] , { relativeTo : this.rout, queryParams : { 'data': 'Amraiza'}});
  }

}
