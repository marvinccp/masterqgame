export const gameResumeReducer = (state, action) => {
  switch (action.type) {
    case "RESUME":
      return {
        ...state,
        points: action.payload.points,
        correct: action.payload.correct,
        questionsNumber: action.payload.questions,
        loading: false,
      };
  }
};
