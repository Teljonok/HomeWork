import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizService} from '../../quiz.service';
import {IQuestion} from '../../store/models/quiz.interface';
import {Store} from '@ngrx/store';
import {loadQuestion} from '../../store/actions/quiz.actions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: any;
   responsiveOptions: any = [];

  // timer: any = null;
  // startTime: Date;
  // ellapsedTime = '00';

  timeLeft: number = 20;
  interval;

  constructor(private activatedRoute: ActivatedRoute, private quizService: QuizService, private store: Store) {

    store.dispatch(loadQuestion());

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }


  ngOnInit(): void {
    // this.activatedRoute.data.subscribe((response: any) => {
    //   console.log('questions FETCHING', response);
    //   this.questions = JSON.parse(response.data).results;
    //   this.questions.forEach( (question: IQuestion) => {
    //     question.allAnswers = [];
    //     question.allAnswers = question.incorrect_answers.concat(question.correct_answer);
    //   });
    // });

    this.loadQuestion();
  }

  //set timer


  setUserAnswer(answer: any) {
    console.log(answer);
  }

  setCurrentQuestion(page: any) {
    console.log(page);
  }

  private loadQuestion() {
    // this.startTime = new Date();
    // this.ellapsedTime = '00';
    // this.timer = setInterval(() => {
    //   this.tick();
    // }, 1000);
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.loadQuestion();
        this.store.dispatch(loadQuestion());
        this.timeLeft = 20;
        clearInterval(this.interval);
      }
    }, 1000);
  }


  // tick() {
  //   let now = new Date();
  //   const diff = (now.getTime() - this.startTime.getTime()) / 1000;
  //   if (diff >= 20) {
  //     this.store.dispatch(loadQuestion());
  //     this.ellapsedTime = '00';
  //   }
  //   else {
  //     this.ellapsedTime = this.parseTime(diff);
  //   }
  // }

  // parseTime(totalSeconds: number) {
  //   let secs: string | number = Math.round(totalSeconds % 60);
  //   secs = (secs < 10 ? '0' : '') + secs;
  //   return `${secs}`;
  // }
}
