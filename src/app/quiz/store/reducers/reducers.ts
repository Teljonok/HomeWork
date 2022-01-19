import { Action, createReducer, on } from '@ngrx/store';

import * as quizActions from '../actions/quiz.actions';

import {IQuestion} from '../models/quiz.interface';

export interface State {
  questions: IQuestion | any;
  result?: any;
  currentQuestion?: IQuestion |any;
  isLoading: boolean;
  isLoadingSuccess: boolean;

}


export const initialState: State = {
  questions: null,
  result: '',
  currentQuestion: null,
  isLoading: false,
  isLoadingSuccess: false,

};

const loadReducer = createReducer(
  initialState,
  on(quizActions.loadQuestions, (state) => ({...state, isLoading: true})),
  on(quizActions.loadQuestionsSuccess,
    (state, result) => ({questions: result.response, isLoading: false, isLoadingSuccess: true})));


export function reducer(state: State | undefined, action: Action): any {
  return  loadReducer(state, action);
}


export const getAllQuestions = (state: State) => {
  return {
    questions: state.questions,
    result: state.result,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};

export const getCurrentQuestion = (state: State) => {
  return {
    currentQuestion: state.currentQuestion
  };
};


