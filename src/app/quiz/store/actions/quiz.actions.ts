import {createAction, props} from '@ngrx/store';
import {IAnswer, IQuestion} from '../models/quiz.interface';


export const LOAD_QUESTION = '[QUESTION] Load Question';
export const LOAD_QUESTION_FAIL = '[QUESTION] Load Question Fail';
export const LOAD_QUESTION_SUCCESS = '[QUESTION] Load Question Success';

export const UPDATE_QUESTIONS = '[QUESTIONS] Update Question';
export const UPDATE_QUESTIONS_SUCCESS = '[QUESTIONS] Update Questions Success';

export const GET_CURRENT_QUESTION = '[QUESTION] Get Current Question';
export const ADD_CURRENT_QUESTION = '[QUESTION] Add Current Question';

export const UPDATE_ANSWER = '[ANSWER] Update Answer';


export const loadQuestion = createAction(LOAD_QUESTION);

export const loadQuestionSuccess = createAction(
  LOAD_QUESTION_SUCCESS,
  props<{question: IQuestion}>()
);

export const loadQuestionFail = createAction(
  LOAD_QUESTION_FAIL,
  props<{message: string}>()
);



export const updateQuestions = createAction(
  UPDATE_QUESTIONS,
  props<{question: IQuestion}>()
);

export const updateQuestionsSuccess = createAction(
  UPDATE_QUESTIONS_SUCCESS,
  props<{question: IQuestion}>()
);



export const getCurrentQuestion =  createAction(
  GET_CURRENT_QUESTION,
  props<{question: IQuestion}>()
);

export const addCurrentQuestion =  createAction(
  ADD_CURRENT_QUESTION,
  props<{question: IQuestion}>()
);

export const updateAnswer =  createAction(
  UPDATE_ANSWER,
  props<{answer: IAnswer}>()
);


