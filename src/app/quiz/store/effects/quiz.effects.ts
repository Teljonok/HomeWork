import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, exhaustMap, catchError, mergeMap} from 'rxjs/operators';
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

  loadQuestion$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadQuestion),
        mergeMap( (action) => {
          return this.quizService.getQuestion().pipe(
            map( (question) => {
              return loadQuestionSuccess({question});
            })
          );
        })
      );
    },
  );

    //setCurrentQuestion

}
