import { Component, OnInit, Query } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Service } from "../../service.service";
import { Observable } from "rxjs";
import { map, first, finalize } from "rxjs/operators";

import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { LecturesService } from "src/app/services/lectures.service";

@Component({
  selector: "app-lec-data",
  templateUrl: "./lec-data.component.html",
  styleUrls: ["./lec-data.component.css"]
})
export class LecDataComponent implements OnInit {
  lect_des: string = "";
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
    const ref = this.storage.ref(`lectures/${this.file.name}`);
    const task = ref.put(this.file);
    this.uploadPercent = task.percentageChanges();
    

    this.afs
      .doc(`courses/${this.id}`)
      .snapshotChanges()
      .subscribe(i => {
       
        const data = i.payload.data() as Course;
      

        this.temp = [...data.lectures];
       
      });

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = ref.getDownloadURL();
          this.downloadURL.subscribe(url => {
           

            this.lectures(url);
          });
        })
      )
      .subscribe(i => {
       
      });
  }

  lectures(url) {
  
    this.temp.push({
      href: url,
      description: this.lect_des
    });
    
    this.afs
      .doc(`courses/${this.id}`)
      .update({
        lectures: this.temp
      });
     
  }
}

interface Course {
  course_name ? : string;
  course_code ?: string;
  lectures ?: [];
  assignments?:[];
}
