import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import {Router} from'@angular/router'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Service implements OnInit{
  items: Observable<any[]>;
  
  constructor (private afs:AngularFirestore ,private auth :AngularFireAuth,private router:Router) {
   
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
      this.afs.collection('teachers').add({id:user.user.uid})
      this.router.navigate(['./teacher-login'])
    })
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

  
}
