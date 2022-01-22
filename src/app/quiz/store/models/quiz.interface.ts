export interface IQuestion {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  allAnswers: IAnswer[];
  isCorrectAnswer?: string;
}

export interface IAnswer {
  option: string;
  correct: boolean;
  clicked: boolean;
}
