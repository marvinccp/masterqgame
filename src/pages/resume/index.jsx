import styles from "./Resume.module.css";
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
    handleLogout
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
              style={{marginTop:'20px', color: "black", fontSize: ".8rem",  }}
            >{`${correct} De ${questionsNumber.length} Preguntas`}</h2>
            <h2
              style={{ color: "green", fontSize: "1rem", lineHeight:'2rem' }}
              className={start.className}
            >{`Has Ganado ${points} puntos`}</h2>
          </div>
          <h1>{pointsReward[rewardInfo]?.text}</h1>
          <Image
            src={pointsReward[rewardInfo]?.img}
            width={150}
            height={150}
            alt="reward"
            className={styles.image}
          />
          <section className={styles.buttons_container}>
          <Link className={styles.link} href={"/game"}>
            <button className={styles.new_game_button}>Nuevo Juego</button>
          </Link>
          <button className={styles.logout_button}  onClick={handleLogout}>logout</button>
          </section>
         
        </main>
      ) : loading ? (
        <section className={styles.zombie}>
          <div className={styles.loader}></div>
        </section>
      ) : (
        <section className={styles.zombie}>
          <h1 style={{
            fontSize:'1rem'
          }} className={start.className}>{pointsReward[rewardInfo]?.text}</h1>
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
          <Link className={styles.link} href={"/top_score"}>
            <button className={styles.new_game_button}>Top Score</button>
          </Link>
          <button className={styles.logout_button}  onClick={handleLogout}>logout</button>

        </section>
      )}
    </>
  );
};

export default Index;
