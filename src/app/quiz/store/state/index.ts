import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
// @ts-ignore
import { localStorageSync } from 'ngrx-store-localstorage';

import * as fromQuiz from '../reducers/reducers';
import {environment} from '../../../../environments/environment';

export interface State {
  questions: fromQuiz.State;
  currentQuestion: fromQuiz.State;
}

export const reducers: ActionReducerMap<State> = {
  questions: fromQuiz.reducer,
  currentQuestion: fromQuiz.reducer,

};

const reducerKeys = ['questions'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys})(reducer);
}

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}


export const getQuizState = createFeatureSelector<fromQuiz.State>('questions');

export const getAllQuestions = createSelector(
  getQuizState,
  fromQuiz.getAllQuestions
);

export const getCurrentQuestion = createSelector(
  getQuizState,
  fromQuiz.getCurrentQuestion
);


