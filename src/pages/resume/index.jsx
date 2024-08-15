import styles from "../../components/resume/Resume.module.css";
import GameLayout from "@/layouts/GameLayout";
import Link from "next/link";
import Image from "next/image";
import useResume from "@/hooks/useResume";

import { Press_Start_2P } from "next/font/google";
const start = Press_Start_2P({ subsets: ["latin"], weight: "400" });

const Index = ({ children }) => {
  const {
    points,
    loading,
    correct,
    questionsNumber,
    pointsReward,
    rewardInfo,
  } = useResume();
  return (
    <>
      <GameLayout title="Resumen" />
      {points ? (
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
          <h1>{pointsReward[rewardInfo]?.text}</h1>
          <Image
            src={pointsReward[rewardInfo]?.img}
            width={200}
            height={200}
            alt="reward"
            className={styles.image}
          />
          <Link className={styles.link} href={"/game"}>
            <button className={styles.new_game_button}>New Game</button>
          </Link>
        </main>
      ) : loading ? (
        <section className={styles.zombie}>
          <div className={styles.loader}></div>
        </section>
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
          <Link className={styles.link} href={"/game"}>
            <button className={styles.new_game_button}>New Game</button>
          </Link>
        </section>
      )}
    </>
  );
};

export default Index;
