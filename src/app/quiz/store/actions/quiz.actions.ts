import {createAction, props} from '@ngrx/store';
import {IQuestion} from '../models/quiz.interface';


export const LOAD_QUESTION = '[QUESTION] Load Question';
export const LOAD_QUESTION_FAIL = '[QUESTION] Load Question Fail';
export const LOAD_QUESTION_SUCCESS = '[QUESTION] Load Question Success';

export const GET_CURRENT_QUESTION = '[QUESTION] Get Current Question';
export const ADD_CURRENT_QUESTION = '[QUESTION] Add Current Question';


export const loadQuestion = createAction(LOAD_QUESTION);

export const loadQuestionSuccess = createAction(
  LOAD_QUESTION_SUCCESS,
  props<{question: IQuestion}>()
);

export const loadQuestionFail = createAction(
  LOAD_QUESTION_FAIL,
  props<{message: string}>()
);

export const getCurrentQuestion =  createAction(
  GET_CURRENT_QUESTION,
  props<{Question: IQuestion}>()
);

export const addCurrentQuestion =  createAction(
  ADD_CURRENT_QUESTION,
  props<{Question: IQuestion}>()
);



