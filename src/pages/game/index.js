import { TimeBarr } from "@/components/time_barr/TimeBarr";
import { Modal } from "@/components/modal/Modal";
import { GameMusic } from "@/components/game_music/GameMusic";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Press_Start_2P } from "next/font/google";

import GameLayout from "@/layouts/GameLayout";
import useGame from "@/hooks/useGame";
import styles from "@/styles/Home.module.css";

const pixel = Press_Start_2P({ subsets: ["latin"], weight: "400" });

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  const {
    end,
    start,
    show,
    optionError,
    points,
    time,
    actualQuestion,
    disabled,
    questionsLevel,
    starGame,
    handleChange,
    handleAnswer,
    transition,
    messageLevel,
    playOnCorrect,
    playOnStart,
    playOnSelect,
    category,
  } = useGame();
 console.log(start);

  useEffect(() => {
    if (end) {
      router.push("/resume");
    }
  }, [end, router]);

  if (loading) {
    return null;
  }

  return (
    <>
      <GameMusic
        isPlaying={start && !end}
        volume={0.3}
        playOnCorrect={playOnCorrect}
        playOnStart={playOnStart}
        playOnSelect={playOnSelect}
      />
      <GameLayout start={start} category={category} name="Home" />

      <div className={`${styles.start_blank}`}>
        {transition && (
          <div className={`${styles.message} }`}>
            <h2 className={pixel.className}>{messageLevel}</h2>
          </div>
        )}{" "}
        {start && (
          <section
          className={`${styles.main} ${
            category === "Sensei" && styles.sensei
          }`}
          >
            {start && <TimeBarr category={category} points={points} time={time} />}
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
              {/* <div
                style={{
                  marginTop: "20px",
                  position: "aboslute",
                  color: "black",
                  background: "white",
                  width: "35px",
                  height: "35px",
                  borderRadius: "50px",
                  display: "grid",
                  placeContent: "center",
                  fontSize: "1.2rem",
                }}
              >
                {actualQuestion + 1}
              </div> */}
            </section>
          </section>
        )}
      </div>

      {show && (
        <Modal
          optionError={optionError}
          starGame={starGame}
          handleChange={handleChange}
        />
      )}
    </>
  );
};

export default Home;
