
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MessageService} from 'primeng/api';
import {QuizModule} from './quiz/quiz.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    QuizModule,
    AppRoutingModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
