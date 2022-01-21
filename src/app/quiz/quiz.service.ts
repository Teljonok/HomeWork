import { Injectable } from '@angular/core';
import {EMPTY, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { tap} from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import {IQuestion} from './store/models/quiz.interface';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient, private messageService: MessageService) { }


  getQuestion(): Observable<IQuestion> {
    return this.http.get<IQuestion>('https://opentdb.com/api.php?amount=1&type=multiple');
      // .pipe(
      //   tap(
      //     data => { },
      //     error => {
      //       this.handleError();
      //       return EMPTY;
      //     }
      //   ));
  }

  private handleError(): any {
    this.messageService.add({
      severity: 'error',
      detail: 'Something went wrong'
    });
  }
}
