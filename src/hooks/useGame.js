import { getData } from "@/helpers/data";
import { gameReducer } from "@/reducers/gameReducer";
import { useReducer, useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

const useGame = () => {
  const initialState = {
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
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getData();
      setData(res);
    };

    fetchData();
  }, []);

  //questions
  const questionsData = data;

  //level questions
  const questionsLevel = questionsData.filter(
    (questions) => questions.category === state.category
  ).slice(0,20)

  //localStorage
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
        // setEnd(true);
        // setTime(null);
      }
    }, 1000);

    return () => clearInterval(gameInterval);
  }, [state.time, state.actualQuestion, state.start, questionsLevel.length]);

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
    10: "Ahora vamos al Nivel 2",
    20: "Ahora vamos al Nivel 3",
    30: "Ahora vamos al Nivel 4",
    40: "Ahora vamos al Nivel 5",
  };

  const nextQuestion = (e) => {
    console.log(nivelMessages[state.actualQuestion]);

    if (nivelMessages[state.actualQuestion]) {
      console.log(nivelMessages[state.actualQuestion]);
    }
    if (state.actualQuestion === questionsLevel.length - 1) {
      setTimeout(() => {
        dispatch({ type: "END_GAME" });
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

      dispatch({ type: "CORRECT_ANSWER" });
      // setPoints(points + 2);
      // setCorrect(correct + 1);
    } else {
      e.target.classList = styles.incorrect;
    }
  };
  //escoger nivel de dificultad
  const handleChange = (value) => {
    dispatch({ type: "CATEGORY", payload: value });
    // setCategory(value);
  };

  //iniciar el juego luego de escoger nivel de dificultad
  const starGame = (selectedOption) => {
    if (!selectedOption) {
      dispatch({ type: "OPTION_ERROR", payload: "Choose Option" });
      // setOptionError("Choose Level!!");
    } else {
      dispatch({ type: "START_GAME" });
      // setTime(10);
      // setShow(false);
      // setStart(true);
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
    starGame,
    handleChange,
    handleAnswer,
  };
};
export default useGame;
