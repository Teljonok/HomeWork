import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import { QuizComponent } from './components/quiz/quiz.component';
import {QuizRoutingModule} from './quiz-routing.module';
import {QuestionsComponent} from './components/questions/questions.component';
import {MessageService} from 'primeng/api';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
  QuizComponent,
  QuestionsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    QuizRoutingModule,
    ButtonModule,
  ],
  providers: [MessageService]
})
export class QuizModule { }
