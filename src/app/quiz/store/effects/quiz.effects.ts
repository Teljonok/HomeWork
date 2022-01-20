import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as quizActions from '../actions/quiz.actions';
import {QuizService} from '../../quiz.service';
import {loadQuestion, loadQuestionFail, loadQuestionSuccess} from '../actions/quiz.actions';

@Injectable()
export class QuizEffects {

  constructor(
    private actions$: Actions,
    private quizService: QuizService
  ) {}

  loadQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(quizActions.loadQuestion),
      exhaustMap(action =>
        this.quizService.getQuestion().pipe(
          map(response => quizActions.loadQuestionSuccess(response)),
          catchError((error: any) => of(quizActions.loadQuestionFail(error))))
      )
    )
  );

    //setCurrentQuestion

}
