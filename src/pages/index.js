import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import GameLayout from "@/layouts/GameLayout";
import { useState, useEffect } from "react";
import { data } from "../helpers/data";
import { TimeBarr } from "@/components/TimeBarr";
import { Modal } from "@/components/Modal";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });


const Home = () => {
  const [category, setCategory] = useState("Easy");
  const [end, setEnd] = useState(false);
  const [actualQuestion, setActualQuestion] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(0);
  const [points, setPoints] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [start, setStart] = useState(false);
  const [show, setShow] = useState(false);

  //questions
  const [questionsData, setQuestionsData] = useState(data);

  /*
  En este use effect hacemos el fetch de las preguntas a la base datos,
  con fines academicos estoy usando el archivo data.js que contiene las preguntas
  */

  // useEffect(() => {
  //   const data = async () => {
  //     const res = await fetch("http://localhost:3000/game/Questions/");
  //     const data = await res.json();
  //     console.log(data);
  //     setQuestionsData(data);
  //   };
  //   data();
  // }, []);

  //level questions
  const questionsLevel = questionsData.filter(
    (questions) => questions.category === category
  );

  //localStorage

  useEffect(() => {
    localStorage.setItem(
      "points",
      JSON.stringify({
        points: points,
        questions: questionsLevel,
        correct: correct,
      })
    );
  }, [points, correct, questionsLevel]);

  const router = useRouter();

  // en caso de no responder alguna pregunta
  useEffect(() => {
    if (start !== true) {
      setShow(true);
    }

    const gameInterval = setInterval(() => {
      //cuenta regresiva
      if (time > 0) setTime(time - 1);
      if (time === 0 && start) {
        setActualQuestion(actualQuestion + 1);
        setTime(10);
      }
      if (time === 0 && actualQuestion === questionsLevel.length - 1) {
        setEnd(true);
        setTime(null);
      }
    }, 1000);

    return () => clearInterval(gameInterval);
  }, [time, actualQuestion, start]);

  // al responder una pregunta
  const handleAnswer = (isCorrect, e) => {
    setDisabled(true);
    correctAnswer(isCorrect, e);
    nextQuestion(e);
  };

  /*
  Pasar a la siguiente pregunta o hacer el resumen
  */
  const nextQuestion = (e) => {
    if (actualQuestion === questionsLevel.length - 1) {
      setTimeout(() => {
        setTime(null);
        setEnd(true);
        // soundGame();
      }, 2500);
    } else {
      setTimeout(() => {
        e.target.classList = styles.answer;
        setActualQuestion(actualQuestion + 1);
        setDisabled(false);
        setTime(10);
      }, 1500);
    }
  };

  //poner a estilo de acuerdo con el acierto fallo de la respuesta
  const correctAnswer = (isCorrect, e) => {
    if (isCorrect) {
      e.target.classList = styles.correct;
      setPoints(points + 2);
      setCorrect(correct + 1);
    } else {
      e.target.classList = styles.incorrect;
    }
  };
  //escoger nivel de dificultad
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  //iniciar el juego luego de escoger nivel de dificultad
  const starGame = () => {
    setTime(10);
    setShow(false);
    setStart(true);
  };

  if (end) {
    router.push("/resume");
  } else
    return (
      <>
        <GameLayout name="Home" />
        <TimeBarr points={points} time={time} />

        <section className={styles.main}>
          <section className={styles.question_container}>
            {/* Questions */}
            <span>{questionsLevel[actualQuestion]?.question}</span>
          </section>
          <section className={styles.answers_container}>
            {/* Answers */}
            {questionsLevel[actualQuestion]?.options.map((answer) => (
              <button
                key={answer.op}
                disabled={disabled}
                onClick={(e) => handleAnswer(answer.isCorrect, e)}
                className={`${styles.answer}`}
              >
                {answer.answerText}
              </button>
            ))}
          </section>
        </section>
        {show && <Modal starGame={starGame} handleChange={handleChange} />}
      </>
    );
};

export default Home;
