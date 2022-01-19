import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizService} from '../../quiz.service';
import {IQuestion} from '../../store/models/quiz.interface';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: any;
   responsiveOptions: any = [];

  constructor(private activatedRoute: ActivatedRoute, private quizService: QuizService, private store: Store) {

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
    this.activatedRoute.data.subscribe((response: any) => {
      console.log('questions FETCHING', response);
      this.questions = JSON.parse(response.data).results;
      this.questions.forEach( (question: IQuestion) => {
        question.allAnswers = [];
        question.allAnswers = question.incorrect_answers.concat(question.correct_answer);
      });
    });
  }



  setUserAnswer(answer: any) {
    console.log(answer);
  }
}
