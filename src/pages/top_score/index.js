import GameLayout from "@/layouts/GameLayout";
import React, { useEffect, useState } from "react";
import styles from "./top_score.module.css";
import { getTopScorePlayers } from "@/helpers/data";
import { Press_Start_2P } from "next/font/google";
const start = Press_Start_2P({ subsets: ["latin"], weight: "400" });

const Index = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const getData = async () => {
      const players = await getTopScorePlayers();
      setData(players);
    };
    getData();
  }, []);

  return (
    <>
      <GameLayout title="Top Score" />
      <section className={styles.top_container}>
        <section className={styles.title_container}>
          <h2 className={start.className}>Top Score Players</h2>
        </section>
        <section className={styles.table_container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Posición</th>
                <th>Nickname</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {data.map((player, i) => (
                <tr key={player.id}>
                  <td>{i + 1}</td>
                  <td>{player.nickname}</td>
                  <td>{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
};
export default Index;
