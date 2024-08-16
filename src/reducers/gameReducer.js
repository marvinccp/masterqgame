export const gameReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "SHOW_MODAL":
      return {
        ...state,
        show: true,
      };
    case "START_GAME":
      return {
        ...state,
        time: 10,
        show: false,
        start: true,
      };
    case "COUNTDOWN":
      return {
        ...state,
        time: state.time - 1,
      };
    case "END_GAME":
      return {
        ...state,
        end: true,
        time: null,
      };
    case "DISABLED":
      return {
        ...state,
        disabled: true,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        actualQuestion: state.actualQuestion + 1,
        disabled: false,
        time: 10,
      };
    case "CORRECT_ANSWER":
      return {
        ...state,
        points: state.points + 2,
        correct: state.correct + 1,
      };
    case "OPTION_ERROR":
      return {
        ...state,
        optionError: action.payload,
      };
    case "TRANSITION":
      return {
        ...state,
        transition: true,
        messageLevel: action.payload,
      };
    case "CLOSE_TRANSITION":
      return {
        ...state,
        transition: false,
      };
  }
};
