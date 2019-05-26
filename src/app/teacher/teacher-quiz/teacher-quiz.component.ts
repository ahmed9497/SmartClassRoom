import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../services/quiz.service';
import {Router} from '@angular/router';
import {startTimeRange} from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-teacher-quiz',
  templateUrl: './teacher-quiz.component.html',
  styleUrls: ['./teacher-quiz.component.css']
})
export class TeacherQuizComponent implements OnInit {
  // private quizService: any[];

  constructor(private router: Router, private quizService: QuizService) { } // dependency injection of service

  ngOnInit() {
    // this.quizService.seconds = 0;
    // this.quizService.qnProgress = 0;
    // this.quizService.getQuestion();
    {
    }

  //   startTimeRange('setInterval', 'setInterval'); {
  //     this.quizService.timer = setInterval(() => {
  //       this.quizService.seconds++;
  //     }, 1000);
  //   }
  }

}
