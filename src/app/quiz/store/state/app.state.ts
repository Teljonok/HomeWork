import {RouterReducerState} from '@ngrx/router-store';

import {IQuizState, initialQuizState} from './quiz.state';

export interface IAppState {
  router?: RouterReducerState;
  quiz: IQuizState;
}

export const initialAppState: IAppState = {
  quiz: initialQuizState
};
