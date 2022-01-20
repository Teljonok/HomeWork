import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuizComponent} from './quiz/components/quiz/quiz.component';
import {QuestionsComponent} from './quiz/components/questions/questions.component';
import {CarouselModule} from 'primeng/carousel';
import {StoreModule} from '@ngrx/store';
import {reducer} from './quiz/store/reducers/reducers';
import {EffectsModule} from '@ngrx/effects';
import {QuizEffects} from './quiz/store/effects/quiz.effects';
import {MessageService} from 'primeng/api';



@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    AppRoutingModule,
    StoreModule.forRoot(reducer, {
    }),
    EffectsModule.forRoot([QuizEffects])

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
