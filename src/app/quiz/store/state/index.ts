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
  question: fromQuiz.State;
  currentQuestion: fromQuiz.State;
}

export const reducers: ActionReducerMap<State> = {
  question: fromQuiz.reducer,
  currentQuestion: fromQuiz.reducer,

};

const reducerKeys = ['question'];
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


export const getQuizState = createFeatureSelector<fromQuiz.State>('question');

export const getQuestion = createSelector(
  getQuizState,
  fromQuiz.getQuestion
);

export const getCurrentQuestion = createSelector(
  getQuizState,
  fromQuiz.getCurrentQuestion
);


