import GameLayout from "@/layouts/GameLayout";
import React, { Suspense, useEffect, useState } from "react";
import styles from "./top_score.module.css";
import { getTopScorePlayers } from "@/helpers/data";
import { Press_Start_2P } from "next/font/google";
import { Loader } from "@/components/loader/Loader";

const start = Press_Start_2P({ subsets: ["latin"], weight: "400" });

const Index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    try {
      const getData = async () => {
        const players = await getTopScorePlayers();

        if (players) {
          setData(players.players);
        } else {
          throw new Error("Error en la carga de datos");
        }
      };
      getData();
    } catch (error) {
      setError(
        "No podemos cargar los datos en este momento, intentelo más tarde"
      );
    } finally {
      setLoading(false);
    }
  }, []);
  if(loading){
    return <Loader />
  }
  if(error){
    return <h1>{error}</h1>
  }

  return (
    <Suspense fallback={<Loader />}>
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
              {data.length > 0 &&
                data?.map((player, i) => (
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
    </Suspense>
  );
};
export default Index;
