import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizComponent} from './components/quiz/quiz.component';
import {QuestionsComponent} from './components/questions/questions.component';

const routes: Routes = [
  { path: '', component: QuizComponent},
  { path: 'quiz', component: QuizComponent},
  {
    path: 'questions', component: QuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
