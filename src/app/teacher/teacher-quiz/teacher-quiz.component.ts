import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore,   } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { finalize } from 'rxjs/operators';
import {Observable} from 'rxjs'
import {Service} from '../../service.service';
import {ActivatedRoute,Router} from'@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-teacher-quiz',
  templateUrl: './teacher-quiz.component.html',
  styleUrls: ['./teacher-quiz.component.css']
})
export class TeacherQuizComponent implements OnInit {
    quizService: any =[];
    quizForm: FormGroup;
    id: any;
  constructor(
    private service: Service,
    private router: Router,
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private auth: AngularFireAuth,
    private _formBuilder: FormBuilder ,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.quizForm = this._formBuilder.group({
      // 'email': ['', [Validators.email, Validators.required]],
      // 'password': ['', [Validators.required, Validators.minLength(6)]],
      'question': [''],
      'option-A': [''],
      'option-B': [''],
      'option-C': [''],
      'option-D': [''],
      'answer': [''],
      
    });

  }
next(){
  this.quizService.push(this.quizForm.value);
  this.quizForm.reset();
}  
submit(){
 
  console.log(this.quizForm.value)
 
 
  console.log(this.quizService);
  this.service.generateQuiz(this.quizService,this.id);
}
}
