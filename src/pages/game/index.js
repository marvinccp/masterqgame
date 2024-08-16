import styles from "../../styles/Home.module.css";
import GameLayout from "@/layouts/GameLayout";
import { TimeBarr } from "@/components/time_barr/TimeBarr";
import { Modal } from "@/components/modal/Modal";
import { useRouter } from "next/router";
import useGame from "@/hooks/useGame";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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
  } = useGame();

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
      <GameLayout  name="Home" />

      <div className={styles.start_blank}>
        {transition && (
          <div className={styles.message}>
            <h2>{messageLevel}</h2>
          </div>
        )}{" "}
        {start && <TimeBarr points={points} time={time} />}
        {start && (
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
              <div
                style={{
                  marginTop: "50px",
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
              </div>
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
