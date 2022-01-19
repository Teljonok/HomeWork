import {IQuestion} from '../models/quiz.interface';

export interface IQuizState {
  questions: IQuestion[];
  selectedQuestion: IQuestion |any;
}

export const initialQuizState: IQuizState = {
  questions: [],
  selectedQuestion: null
};
