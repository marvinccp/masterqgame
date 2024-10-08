import { getData } from "@/helpers/data";
import { dataInitialState, dataReducer, gameReducer, initialState, soundInitialState, soundReducer } from "@/reducers/gameReducer";
import { useReducer, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import confetti from "canvas-confetti";
import axios from "axios";

const useGame = () => {
  
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [dataState, dataDispatch] = useReducer(dataReducer, dataInitialState);
  const [soundState, soundDispatch] = useReducer(soundReducer, soundInitialState);


  useEffect(() => {
    const fetchData = async () => {
      const res = await getData();
      dataDispatch({
        type:"GAME_DATA",
        payload: res
      });
    };

    fetchData();
  }, []);

  //questions

  //level questions
  const questionsLevel = dataState.data
    .filter((questions) => questions.category === state.category)
    .slice(0, 15);

  useEffect(() => {
    localStorage.setItem(
      "points",
      JSON.stringify({
        points: state.points,
        questions: questionsLevel,
        correct: state.correct,
      })
    );
  }, [state.points, state.correct, questionsLevel]);

  useEffect(() => {
    const player = JSON.parse(localStorage.getItem("user"));
    if (!player) {
      return;
    }
    dataDispatch({
      type:"PLAYER_DATA", payload:player
    })
  }, []);

  const updateTotalPoints = async (playerId) => {
    if (!playerId) {
      throw new Error("playerId o points no son válidos");
    }
    const sessionData = JSON.parse(localStorage.getItem("points"));
    const sessionPoints = sessionData?.points;

    try {
      const response = await axios.patch(
        "https://masterquestionback-production.up.railway.app/game/players/points",
        { playerId, sessionPoints }
      );
      if (!response) {
        return;
      }
    } catch (error) {
      console.error(
        "Error al actualizar los puntos:",
        error.response?.data || error.message
      );
    }
  };

  // en caso de no responder alguna pregunta
  useEffect(() => {
    if (state.start !== true) {
      dispatch({ type: "SHOW_MODAL" });
      // setShow(true);
    }

    const gameInterval = setInterval(() => {
      //cuenta regresiva
      if (state.time > 0) dispatch({ type: "COUNTDOWN" });
      if (state.time === 0 && state.start) {
        dispatch({ type: "NEXT_QUESTION" });
        // setActualQuestion(actualQuestion + 1);
        // setTime(10);
      }
      if (
        state.time === 0 &&
        state.actualQuestion === questionsLevel.length - 1
      ) {
        dispatch({ type: "END_GAME" });
        updateTotalPoints(dataState.player.id);
        // setEnd(true);
        // setTime(null);
      }
    }, 1000);

    return () => clearInterval(gameInterval);
  }, [
    state.time,
    state.actualQuestion,
    state.start,
    questionsLevel.length,
    dataState.player.id,
    state.points,
  ]);

  // al responder una pregunta
  const handleAnswer = (isCorrect, e) => {
    dispatch({ type: "DISABLED" });
    // setDisabled(true);
    correctAnswer(isCorrect, e);
    nextQuestion(e);
  };

  /*
  Pasar a la siguiente pregunta o hacer el resumen
  */

  const nivelMessages = {
    6: "Nivel 2",
    12: "Nivel 3",
    18: "Nivel 4",
    24: "Nivel 4",
  };

  const confettiLevel = (e) => {
    //cooordenadas del botón de respuesta correcta
    const coord = e.target.getBoundingClientRect();

    //fecto de conffeti
    confetti({
      particleCount: 70,
      spread: 120,
      startVelocity: 30,
      decay: 0.9,
      gravity: 2,
      colors: ["#FFD700", "#FF4500", "#00BFFF"],
      scalar: 0.8,
      shapes: ["circle"],
      angle: 90,
      zIndex: 1000,
      origin: {
        x: (coord.left + coord.width / 2) / window.innerWidth,
        y: (coord.top + coord.height / 2) / window.innerHeight,
      },
    });
  };

  const nextQuestion = (e) => {
    soundDispatch({ type:'OFF_START'})
    setTimeout(() => {
      soundDispatch({ type: 'OFF_CORRECT'})
    }, 200);
    if (nivelMessages[state.actualQuestion]) {
      dispatch({
        type: "TRANSITION",
        payload: nivelMessages[state.actualQuestion],
      });
      setTimeout(() => {
        dispatch({ type: "CLOSE_TRANSITION" });
      }, 5000);
    }
    if (state.actualQuestion === questionsLevel.length - 1) {
      setTimeout(() => {
        dispatch({ type: "END_GAME" });
        updateTotalPoints(dataState.player.id);
        // setTime(null);
        // setEnd(true);
      }, 2500);
    } else {
      setTimeout(() => {
        dispatch({ type: "NEXT_QUESTION" });
        e.target.classList = styles.answer;
        // setActualQuestion(actualQuestion + 1);
        // setDisabled(false);
        // setTime(10);
      }, 1500);
    }
  };

  //poner a estilo de acuerdo con el acierto fallo de la respuesta
  const correctAnswer = (isCorrect, e) => {
    if (isCorrect) {
      e.target.classList = styles.correct;
      soundDispatch({ type: 'ON_CORRECT'});
      dispatch({ type: "CORRECT_ANSWER" });

      confettiLevel(e);
    } else {
      e.target.classList = styles.incorrect;
    }
  };
  //escoger nivel de dificultad
  const handleChange = (value) => {
    dispatch({ type: "CATEGORY", payload: value });
    dispatch({ type: "OPTION_SELECTED" });

    soundDispatch({ type:'ON_SELECT' })
    // setCategory(value);
    setTimeout(() => {
soundDispatch({ type: 'OFF_SELECT'})    }, 200);
  };

  //iniciar el juego luego de escoger nivel de dificultad
  const starGame = (selectedOption) => {
    if (!selectedOption) {
      dispatch({ type: "OPTION_ERROR", payload: "Choose Option" });
      // setOptionError("Choose Level!!");
    } else {
      dispatch({ type: "START_GAME" });
      soundDispatch({ type:'ON_START' })
    }
  };

  return {
    end: state.end,
    start: state.start,
    show: state.show,
    optionError: state.optionError,
    points: state.points,
    time: state.time,
    actualQuestion: state.actualQuestion,
    disabled: state.disabled,
    questionsLevel,
    transition: state.transition,
    messageLevel: state.messageLevel,
    starGame,
    handleChange,
    handleAnswer,
    correct: state.correct,
    playOnCorrect:soundState.playOnCorrect,
    playOnStart:soundState.playOnStart,
    playOnSelect:soundState.playOnSelect,
    category: state.category,
    player:dataState.player
  };
};
export default useGame;
