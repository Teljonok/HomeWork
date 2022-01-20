import { Injectable } from '@angular/core';
import {EMPTY, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { tap} from 'rxjs/operators';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private readonly QUIZ_API_URL =
    'https://opentdb.com/api.php?amount=10&type=multiple';
  constructor(private http: HttpClient, private messageService: MessageService) { }


  getAllQuestions(): Observable<any> {
    return this.http.get(this.QUIZ_API_URL, {responseType: 'text'})
      .pipe(
        tap(
          data => { },
          error => {
            this.handleError();
            return EMPTY;
          }
        ));
  }

  getQuestion(): Observable<any> {
    return this.http.get('https://opentdb.com/api.php?amount=1&type=multiple', {responseType: 'text'})
      .pipe(
        tap(
          data => { },
          error => {
            this.handleError();
            return EMPTY;
          }
        ));
  }

  private handleError(): any {
    this.messageService.add({
      severity: 'error',
      detail: 'Something went wrong'
    });
  }
}
