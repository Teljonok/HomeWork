
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MessageService} from 'primeng/api';
import {QuizModule} from './quiz/quiz.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    QuizModule,

    RouterModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
