import {createAction, props} from '@ngrx/store';
import {IQuestion} from '../models/quiz.interface';


export const LOAD_QUESTION = '[Questios] Load Questions';
export const LOAD_QUESTION_FAIL = '[Question] Load Questions Fail';
export const LOAD_QUESTION_SUCCESS = '[Question] Load Questions Success';

export const GET_CURRENT_QUESTION = '[Question] Get Current Question';
export const ADD_CURRENT_QUESTION = '[Question] Add Current Question';


export const loadQuestion = createAction(
  LOAD_QUESTION

);

export const loadQuestionSuccess = createAction(
  LOAD_QUESTION_SUCCESS,
  props<any>()
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



