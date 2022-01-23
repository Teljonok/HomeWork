import { Action, createReducer, on } from '@ngrx/store';

import * as quizActions from '../actions/quiz.actions';

import {initialQuizState, IQuizState} from '../state/quiz.state';
import {IAnswer, IQuestion} from '../models/quiz.interface';


const _quizReducer = createReducer(
  initialQuizState,
  on(quizActions.loadQuestion, (state) => ({...state, isLoading: true})),
  on(quizActions.loadQuestionSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      question: action.question
    };
  }),
  on(quizActions.updateAnswer, (state, action) => {
    return state.question?.map((question: IQuestion) => {
        const updatedAnswers = question.allAnswers.map((answer: IAnswer) => {
          return action.answer.option === answer.option ? action : answer;
        });
        return {
          ...state,
          question: {
            ...state.question.allAnswers,
            allAnswers: updatedAnswers
          }
        };
      }
    );
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


