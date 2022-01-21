import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizService} from '../../quiz.service';
import {IQuestion} from '../../store/models/quiz.interface';
import {Store} from '@ngrx/store';
import {loadQuestion} from '../../store/actions/quiz.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionsComponent implements OnInit, OnDestroy {
  questions: any;
   responsiveOptions: any = [];

  timeLeft = 20;
  interval: any;
  questions$: Observable<IQuestion> | any;
  question: IQuestion[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private store: Store<{ question: {question: IQuestion}  }>) {

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
    this.store.dispatch(loadQuestion());
    this.questions$ = this.store.select('question');

    this.loadQuestion();
  }


  setUserAnswer(answer: any) {
    console.log(answer);
  }

  setCurrentQuestion(page: any) {
    console.log(page);
  }

  private loadQuestion() {
    this.startTimer();
  }

  //set timer

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

  ngOnDestroy(): void{
    clearInterval(this.interval);
  }
}
