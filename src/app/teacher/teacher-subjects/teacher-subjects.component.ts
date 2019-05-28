import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Service } from "../../service.service";
import { Observable } from "rxjs";
import { map, first, finalize } from "rxjs/operators";

@Component({
  selector: "app-teacher-subjects",
  templateUrl: "./teacher-subjects.component.html",
  styleUrls: ["./teacher-subjects.component.css"]
})
export class TeacherSubjectsComponent implements OnInit {
  subjects: any;

  constructor(private service: Service, private router: Router) {}
  ngOnInit() {
    this.service.teacherSubjects().subscribe(i => {
        this.subjects = i.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }
  details(subject){
    console.log("details" + subject.id);
    this.router.navigate(['/teacher-profile/lec-data/'+subject.id])
    //this.router.navigate(['./lect.data'])
  }
}
