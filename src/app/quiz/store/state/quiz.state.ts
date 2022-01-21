import {IQuestion} from '../models/quiz.interface';

export interface IQuizState {
  question: IQuestion | any;
  currentQuestion?: IQuestion | any;
  isLoading: boolean;
  isLoadingSuccess: boolean;
}

export const initialQuizState: IQuizState = {
  question: null,
  currentQuestion: null,
  isLoading: false,
  isLoadingSuccess: false,
};
