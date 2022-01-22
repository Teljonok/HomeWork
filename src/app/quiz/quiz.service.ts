import { Injectable } from '@angular/core';
import {EMPTY, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import {IQuestion} from './store/models/quiz.interface';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient, private messageService: MessageService) { }


  getQuestion(): Observable<IQuestion> {
    return this.http
      .get<IQuestion>('https://opentdb.com/api.php?amount=1&encode=base64&type=multiple')
      .pipe(map((res: any) => {
        res.results.forEach( (result: any) => {
          result.question = atob(result.question);
          const tempIncorrectAnswers: { option: string; correct: boolean; clicked: boolean }[] = [];
          const tempCorrectAnswer = [{option: atob(result.correct_answer), correct: true , clicked: false}];
          result.incorrect_answers.forEach( (answer: string) => {
            tempIncorrectAnswers.push({option: atob(answer), correct: false, clicked: false});
          });
          result.allAnswers = tempIncorrectAnswers.concat(tempCorrectAnswer);
        });
        return res.results;
        }),

        catchError(() => {
          this.handleError();
          return EMPTY;
        }));
  }

  private handleError(): any {
    this.messageService.add({
      severity: 'error',
      detail: 'Something went wrong'
    });
  }
}
