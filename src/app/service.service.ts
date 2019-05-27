import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import {Router} from'@angular/router'
import { Observable } from 'rxjs';
import { map, first ,finalize} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Service implements OnInit{


  items: Observable<any[]>;
  file:any;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;


  constructor (private afs:AngularFirestore ,private auth :AngularFireAuth,private router:Router,
    private storage : AngularFireStorage) {
   
console.log("service is running");
    afs.collection('users').snapshotChanges().subscribe(item=>{
      item.map(data=>{
        console.log(data.payload.doc.data())
      }) 
    
      
     })
   }
ngOnInit(){
 
}

registerTeacher(form) {
  console.log(form);
  

  this.auth.auth.createUserWithEmailAndPassword(form.email,form.password)

  .then(user =>{
    
    this.afs.collection('teachers').add(form)
    .then(succes=>{
      console.log(succes);
      console.log(succes.id);
      this.afs.collection('teachers').doc(`${succes.id}`).update({id:succes.id});
     

     
    })
    this.router.navigate(['./teacher-login'])
  })
  .catch((error)=>{
alert(error);
  })

  
  
}

teacherLogin(form){
  console.log(form);
  this.auth.auth.signInWithEmailAndPassword(form.email,form.password)
  .then(success=>{
    console.log(success)
    alert("success");
    this.router.navigate(['./teacher-profile'])
  })
}

teachersignOut(){
  this.auth.auth.signOut();
  this.router.navigate(['./home'])

}

createCourse(course){
 //var user = this.auth.authState.subscribe(i=>console.log(i));
 var user = this.auth.auth.currentUser;

console.log(user);
console.log(user.uid);
if (user){
 
  this.afs.collection('courses').add({
    course_name:course.coursename,
    course_code:course.coursecode,
    course_marks:course.coursemarks,
    tid:user.uid

  })
  alert("true")
}
else{
  alert("false")
}

}
  
teacherUploadAssignment(file){
console.log(file);


const ref = this.storage.ref(`lectures/${file.name}`);
  const task = ref.put(this.file);
  this.uploadPercent = task.percentageChanges();
  //this.uploadPercent.subscribe();
  task.snapshotChanges().pipe(
    finalize(() => {
      this.downloadURL = ref.getDownloadURL()
      

    } 
    )
 )
.subscribe();
}













}
