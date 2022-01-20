import { Action, createReducer, on } from '@ngrx/store';

import * as quizActions from '../actions/quiz.actions';

import {IQuestion} from '../models/quiz.interface';
import {loadQuestion} from '../actions/quiz.actions';

export interface State {
  question: IQuestion | any;
  result?: any;
  currentQuestion?: IQuestion |any;
  isLoading: boolean;
  isLoadingSuccess: boolean;

}


export const initialState: State = {
  question: null,
  result: '',
  currentQuestion: null,
  isLoading: false,
  isLoadingSuccess: false,

};

const loadReducer = createReducer(
  initialState,
  on(quizActions.loadQuestion, (state) => ({...state, isLoading: true})),
  on(quizActions.loadQuestionSuccess,
    (state, result) => ({question: result.response, isLoading: false, isLoadingSuccess: true})));


export function reducer(state: State | undefined, action: Action): any {
  return  loadReducer(state, action);
}


export const getQuestion = (state: State) => {
  return {
    question: state.question,
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


