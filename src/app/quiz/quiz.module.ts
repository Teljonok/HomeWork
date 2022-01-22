import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import { QuizComponent } from './components/quiz/quiz.component';
import {QuizRoutingModule} from './quiz-routing.module';
import {QuestionsComponent} from './components/questions/questions.component';
import {MessageService} from 'primeng/api';

import {StoreModule} from '@ngrx/store';
import {quizReducer} from './store/reducers/reducers';
import {EffectsModule} from '@ngrx/effects';
import {QuizEffects} from './store/effects/quiz.effects';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';


@NgModule({
  declarations: [
  QuizComponent,
  QuestionsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    QuizRoutingModule,
    StoreModule.forRoot({question: quizReducer}),
    EffectsModule.forRoot([QuizEffects]),
    ButtonModule,
    RippleModule
  ],
  providers: [MessageService]
})
export class QuizModule { }
