export const initialState = {
  category: null,
  end: false,
  actualQuestion: 0,
  disabled: false,
  time: 0,
  points: 0,
  correct: 0,
  start: false,
  show: false,
  optionError: "",
  transition: false,
  messageLevel: "",
};



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

    case "OPTION_SELECTED":
      return {
        ...state,
        optionError: "",
      };
    default:
      return state;
  }
};


export const dataInitialState = {
  player: {},
  data: [],
};
export const dataReducer = (state, action) => {
  switch (action.type) {
    case "PLAYER_DATA":
      return {
        ...state,
        player: action.payload,
      };
    case "GAME_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const soundInitialState = {
  playOnCorrect: false,
  playOnStart: false,
  playOnSelect: false,
};
export const soundReducer = (state, action) => {
  switch(action.type){
    case 'ON_CORRECT':
      return{
        ...state,
        playOnCorrect:true
      }
    case 'OFF_CORRECT':
      return{
        ...state,
        playOnCorrect:false
      }
    case 'ON_START':
      return{
        ...state,
        playOnStart:true
      }
    case 'OFF_START':
      return{
        ...state,
        playOnStart:false
      }
    case 'ON_SELECT':
      return{
        ...state,
        playOnSelect:true
      }
    case 'OFF_SELECT':
      return{
        ...state,
        playOnSelect:false
      }
  }
};