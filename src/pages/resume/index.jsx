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
              style={{marginTop:'20px', color: "black", fontSize: "1.1rem", lineHeight: "1.2rem" }}
            >{`${correct} of ${questionsNumber.length} Questions`}</h2>
            <h2
              style={{ color: "green", fontSize: "1.2rem" }}
              className={start.className}
            >{`You have ${points} points`}</h2>
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
            <button className={styles.new_game_button}>New Game</button>
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
