import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';

// ngrx related imports
import { StoreModule } from '@ngrx/store';
import { reducer } from './quiz/store/reducers/reducers';
import { QuizEffects} from './quiz/store/effects/quiz.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // ngrx related imports
    StoreModule.forRoot(reducer, {
    }),
    EffectsModule.forRoot([QuizEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
