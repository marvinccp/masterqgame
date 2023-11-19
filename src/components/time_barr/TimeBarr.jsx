import styles from './TimePoints.module.css'

import { Press_Start_2P } from "next/font/google";
const start = Press_Start_2P({ subsets: ["latin"], weight: "400" });


export const TimeBarr = ({ points, time}) => {
  return (
    <>
      <section className={styles.container}>
        <div className={`${styles.clock} ${start.className}`}>{time}</div>
        <div className={`${styles.gold} ${start.className}`}>{points}</div>
      </section>
    </>
  );
}
