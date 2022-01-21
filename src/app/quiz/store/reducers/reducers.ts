import { Action, createReducer, on } from '@ngrx/store';

import * as quizActions from '../actions/quiz.actions';

import {initialQuizState, IQuizState} from '../state/quiz.state';


const _quizReducer = createReducer(
  initialQuizState,
  on(quizActions.loadQuestion, (state) => ({...state, isLoading: true})),
  on(quizActions.loadQuestionSuccess, (state, action) => {
    return {
      ...state,
      question: action.question,
    };
  })
  );



export function quizReducer(state: IQuizState | undefined, action: Action): any {
  return  _quizReducer(state, action);
}


export const getQuestion = (state: IQuizState) => {
  return {
    question: state.question,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};

export const getCurrentQuestion = (state: IQuizState) => {
  return {
    currentQuestion: state.currentQuestion
  };
};


