import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { finalize } from 'rxjs/operators';
import {Observable} from 'rxjs'
import {Service} from '../../service.service';
import {Router} from'@angular/router';
@Component({
  selector: 'app-teacher-assignment',
  templateUrl: './teacher-assignment.component.html',
  styleUrls: ['./teacher-assignment.component.css']
})
export class TeacherAssignmentComponent implements OnInit {

  description:string = "this is file to upload"

  file:any;
  uploadPercent: Observable<number>;
  downloadURL : Observable<number>;

  constructor( private service :Service ,private router :Router ,
    private storage :AngularFireStorage,
    private afs :AngularFirestore,
    private auth : AngularFireAuth) {
  }

  ngOnInit() {
    // this.assignments = this.assignmentService.assignments; // data display
    // const today = new Date(); // current date time picker function
    // const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    // const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    // this.currentTime = date + ' ' + time;
  }

  fileuploads(event) {       // fileupload function
    console.log(event.target.files[0]);
    this.file = event.target.files[0];
    //this.service.teacherUploadAssignment(event.target.files[0])
  }
  
upload(){
  const user =this.auth.auth.currentUser;
  console.log(this.file);
  //this.service.teacherUploadAssignment(this.file)
  //this.service.uploadPercent.subscribe(i=>console.log(i))
  const ref = this.storage.ref(`lectures/${this.file.name}`);
  const task = ref.put(this.file);
  this.uploadPercent = task.percentageChanges();
  this.uploadPercent.subscribe(i=>console.log(i));
  task.snapshotChanges().pipe(
    finalize(() => {
      this.downloadURL = ref.getDownloadURL()
      console.log(this.downloadURL);
      this.afs.collection('courses', ref => ref.where('tid', '==', user.uid).where('course_code','==','eng121'))
      .snapshotChanges().subscribe(i=>{
        i.map(i=>{

          console.log(i.payload.doc.id);
          this.afs.doc(`courses/${i.payload.doc.id}`).update({
            lectures:[this.downloadURL]
          })

        }
          )})
      })
  ).subscribe(i=>console.log(i))
    }
    
  
   














}
