import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore,   } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { finalize } from 'rxjs/operators';
import {Observable} from 'rxjs'
import {Service} from '../../service.service';
import {ActivatedRoute,Router} from'@angular/router';

@Component({
  selector: 'app-teacher-assignment',
  templateUrl: './teacher-assignment.component.html',
  styleUrls: ['./teacher-assignment.component.css']
})
export class TeacherAssignmentComponent implements OnInit {

  assign_des: string = "";
  id: any;
  file: any;
  uploadPercent: Observable<number>;
  downloadURL: Observable<number>;
  temp: any = [];
  constructor(
    private service: Service,
    private router: Router,
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private auth: AngularFireAuth
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
  }

  fileuploads(event) {
    // fileupload function
   
    this.file = event.target.files[0];
    //this.service.teacherUploadAssignment(event.target.files[0])
  }

  upload() {
    const user = this.auth.auth.currentUser;
   
    // this.service.teacherUploadAssignment(this.file)
    // this.service.uploadPercent.subscribe(i=>console.log(i))
    const ref = this.storage.ref(`assignments/${this.file.name}`);
    const task = ref.put(this.file);
    this.uploadPercent = task.percentageChanges();
    

    this.afs
      .doc(`courses/${this.id}`)
      .snapshotChanges()
      .subscribe(i => {
       
        const data = i.payload.data() as Course;
      

        this.temp = [...data.assignments];
       
      });

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = ref.getDownloadURL();
          this.downloadURL.subscribe(url => {
           

            this.assignments(url);
          });
        })
      )
      .subscribe(i => {
       
      });
  }

  assignments(url) {
  
    this.temp.push({
      href: url,
      description: this.assign_des
    });
    
    this.afs
      .doc(`courses/${this.id}`)
      .update({
        assignments: this.temp
      });
     
  }
}

interface Course {
  course_name ? : string;
  course_code ?: string;
  lectures ?: [];
  assignments?:[];
}
