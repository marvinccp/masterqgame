import { useEffect, useState } from "react";
import styles from "../../styles/Resume.module.css";
import GameLayout from "@/layouts/GameLayout";
import Link from "next/link";
import { Points } from "@/components/Points";
import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
const start = Press_Start_2P({ subsets: ["latin"], weight: "400" });

const Index = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [questionsNumber, setQuestionsNumber] = useState([]);

  useEffect(() => {
    const points = JSON.parse(localStorage.getItem("points"));
    setPoints(points.points);
    setCorrect(points.correct);
    setQuestionsNumber(points.questions);
  }, [points]);
  console.log(points);
  let reward;

  points === 0
    ? (reward = "zombi")
    : points > 0 && points <= 10
    ? (reward = "good")
    : points > 10 && points <= 20
    ? (reward = "excelent")
    : points > 20 && points <= 30
    ? (reward = "superior")
    : points > 30 && points <= 40
    ? (reward = "god")
    : points > 40 && points <= 50
    ? (reward = "heroe")
    : points > 50
    ? (reward = "master")
    : "";

  

  console.log(reward);
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
      <main className={styles.container}>
        {children}
        <div className={styles.resume}>
          <h2
            className={start.className}
            style={{ color: "black", fontSize: "1.5rem", lineHeight: "2rem" }}
          >{`${correct} Correct of ${questionsNumber.length} Questions`}</h2>
          <h2
            style={{ color: "green", fontSize: "1.2rem" }}
            className={start.className}
          >{`You have ${points} points`}</h2>
        </div>
        <h1>{pointsReward[reward]?.text}</h1>
        <Image
          src={pointsReward[reward]?.img}
          width={200}
          height={200}
          alt="reward"
          className={styles.image}
        />
        <Link className={styles.link} href={"/"}>
          <button className={styles.new_game_button}>New Game</button>
        </Link>
      </main>
    </>
  );
};

export default Index;
