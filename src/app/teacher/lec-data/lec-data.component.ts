import { Component, OnInit, Query } from "@angular/core";
import { Router ,ActivatedRoute} from "@angular/router";
import { Service } from "../../service.service";
import { Observable } from "rxjs";
import { map, first, finalize } from "rxjs/operators";

import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-lec-data',
  templateUrl: './lec-data.component.html',
  styleUrls: ['./lec-data.component.css']
})
export class LecDataComponent implements OnInit {

  description:string = "this is file to upload"
  id:any;
  file:any;
  uploadPercent: Observable<number>;
  downloadURL : Observable<number>;

  constructor( private service :Service ,private router :Router ,
    private storage :AngularFireStorage,
    private afs :AngularFirestore,private route:ActivatedRoute,
    private auth : AngularFireAuth) {
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
 
    // this.lecdata = this.lecdataService.lecdata; // data display
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
  // this.service.teacherUploadAssignment(this.file)
  // this.service.uploadPercent.subscribe(i=>console.log(i))
  const ref = this.storage.ref(`lectures/${this.file.name}`);
  const task = ref.put(this.file);
  this.uploadPercent = task.percentageChanges();
  this.uploadPercent.subscribe(i=>console.log(i));
  task.snapshotChanges().pipe(
    finalize(() => {
      this.downloadURL = ref.getDownloadURL()
     this.downloadURL.subscribe(i=>{
      console.log(i);


      this.afs.doc(`courses/${this.id}`).snapshotChanges().subscribe(i=>{
        console.log(i.payload.data());
        const data = i.payload.data();
        const temp =data.lectures;
      })



     })
   
        
        })
     
  ).subscribe(i=>{
    console.log(i)
    console.log(this.downloadURL);

  })
    

  }
  }
