import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {QuizService} from './quiz.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsDataResolver implements Resolve<boolean> {

  constructor(private quizService: QuizService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.quizService.getAllQuestions();
  }
}
