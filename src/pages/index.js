import styles from "@/styles/Home.module.css";
import GameLayout from "@/layouts/GameLayout";
import { TimeBarr } from "@/components/time_barr/TimeBarr";
import { Modal } from "@/components/modal/Modal";
import { useRouter } from "next/router";
import useGame from "@/hooks/useGame";

const Home = () => {
  const router = useRouter();

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
  } = useGame();

  if (end) {
    router.push("/resume");
  } else
    return (
      <>
        <GameLayout name="Home" />
        <div className={styles.start_blank}>
          {" "}
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
