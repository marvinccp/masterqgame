import { useEffect, useState, useReducer } from "react";
import styles from "../../styles/Resume.module.css";
import GameLayout from "@/layouts/GameLayout";
import Link from "next/link";
import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
const start = Press_Start_2P({ subsets: ["latin"], weight: "400" });

const Index = ({ children }) => {

  const initialState = {
    points: 0,
    correct: 0,
    questionsNumber: [],
  };

  console.log(initialState.points)
  const gameResumeReducer = (state, action) => {
    switch (action.type) {
      case "RESUME":
        return {
          ...state,
          points: action.payload.points,
          correct: action.payload.correct,
          questionsNumber: action.payload.questions,
        };
    }
  };

  const [state, dispatch] = useReducer(gameResumeReducer, initialState);

  useEffect(() => {
    const points = JSON.parse(localStorage.getItem("points"));
    if (points) {
      dispatch({ type: "RESUME", payload: points });
    }
  }, [state.points]);

  //Refactor
  //se crea una matriz donde esten los rangos y la calificación

  const rewardMap = {
    0: "zombi",
    1: "good",
    11: "excellent",
    21: "superior",
    31: "god",
    41: "heroe",
    51: "master",
  };

  //se crea un array con los valores maximos de los rangos, que son las key
  //  de las propiedades.

  const rewardKeys = Object.keys(rewardMap);

  /*
esta función recorre el array y compara el valor  de key actual
con la siguiente y key y con los puntos. basicamente, evalua si 
los puntos son menores que la próxima key . . .
*/
  // let reward;
  let reward = rewardKeys.find((key, i) => {
    const nextKey = rewardKeys[i + 1];
    return state.points >= key && (nextKey === undefined || state.points < nextKey);
  });

  //asiganamos una variable que contiene el valor de la key

  let rewardInfo = rewardMap[reward];

  const pointsReward = {
    good: {
      img: "/icons/good.png",
      text: "Good Work",
    },
    excelent: { img: "/icons/excelent.png", text: "You Are Excelent" },
    superior: { img: "/icons/superior.png", text: "You Are Amazing" },
    god: { img: "/icons/god.png", text: "You Are a god" },
    heroe: { img: "/icons/heroe.png", text: "You Are A Hero" },
    master: { img: "/images/logo-master.png", text: "You Are A Master" },
    zombi: {
      img: "/icons/zombi.png",
      text: "You are a zombie",
    },
  };

  return (
    <>
      <GameLayout title="Resumen" />

      {state.points != 0 ? (
        <main className={styles.container}>
          {children}
          <div className={styles.resume}>
            <h2
              className={start.className}
              style={{ color: "black", fontSize: "1.5rem", lineHeight: "2rem" }}
            >{`${state.correct} Correct of ${state.questionsNumber.length} Questions`}</h2>
            <h2
              style={{ color: "green", fontSize: "1.2rem" }}
              className={start.className}
            >{`You have ${state.points} points`}</h2>
          </div>
          <h1>{pointsReward[rewardInfo]?.text}</h1>
          <Image
            src={pointsReward[rewardInfo]?.img}
            width={200}
            height={200}
            alt="reward"
            className={styles.image}
          />
          <Link className={styles.link} href={"/"}>
            <button className={styles.new_game_button}>New Game</button>
          </Link>
        </main>
      ) : (
        <section className={styles.zombie}>
          <h1>{pointsReward[rewardInfo]?.text}</h1>
          <Image
            src={pointsReward[rewardInfo]?.img}
            width={200}
            height={200}
            alt="reward"
            className={styles.image}
          />
          <Link className={styles.link} href={"/"}>
            <button className={styles.new_game_button}>New Game</button>
          </Link>
        </section>
      )}
    </>
  );
};

export default Index;