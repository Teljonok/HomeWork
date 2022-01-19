import {createAction, props} from '@ngrx/store';
import {IQuestion} from '../models/quiz.interface';


export const LOAD_QUESTIONS = '[Questions] Load Questions';
export const LOAD_QUESTIONS_FAIL = '[Questions] Load Questions Fail';
export const LOAD_QUESTIONS_SUCCESS = '[Questions] Load Questions Success';

export const GET_CURRENT_QUESTION = '[Question] Get Current Question';
export const ADD_CURRENT_QUESTION = '[Question] Add Current Question';


export const loadQuestions = createAction(
  LOAD_QUESTIONS,
  props<{Question: IQuestion[]}>()
);

export const loadQuestionsSuccess = createAction(
  LOAD_QUESTIONS_SUCCESS,
  props<any>()
);

export const loadQuestionsFail = createAction(
  LOAD_QUESTIONS_FAIL,
  props<{message: string}>()
);

export const getCurrentQuestion =  createAction(
  GET_CURRENT_QUESTION,
  props<{Question: IQuestion}>()
);

export const addCurrentQuestion =  createAction(
  GET_CURRENT_QUESTION,
  props<{Question: IQuestion}>()
);



