import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizComponent} from './quiz/components/quiz/quiz.component';
import {QuestionsComponent} from './quiz/components/questions/questions.component';
import {QuestionsDataResolver} from './quiz/questions-data.resolver';

const routes: Routes = [
  { path: '', component: QuizComponent},
  { path: 'quiz', component: QuizComponent},
  {
    path: 'questions', component: QuestionsComponent,
    resolve: {data: QuestionsDataResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
