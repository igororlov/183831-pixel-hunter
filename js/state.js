import questions from './questions';

const getState = (userName) => {
  return {
    userName,
    lives: 3,
    seconds: 30,
    questions,
    currentQuestion: 0,
    answers: []
  };
};

export default getState;
