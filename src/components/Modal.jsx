import { useEffect, useState } from "react";
import styles from "../styles/Modal.module.css";
import ReactDOM from "react-dom";
import Image from "next/image";

export const Modal = ({ starGame, handleChange }) => {
  const [browser, setBrowser] = useState(false);
  const [selectedOption, setselectedOption] = useState("");

  const options = (value) => {
    setselectedOption(value);
  };

  useEffect(() => {
    setBrowser(true);
  }, []);

  if (browser) {
    return ReactDOM.createPortal(
      <section className={styles.container}>
        <div className={styles.modal}>
          <Image
            className={styles.image}
            src="/images/logo-blue.png"
            alt="logo-white"
            width={180}
            height={73}
          />
          {/* <h3 className={styles.text}>
            Welcome!! Are you ready ? <br />
          </h3> */}
          {/* <h2>Choose your level</h2> */}
          <div className={styles.btns_options}>
            <button
              className={`${styles.btnItem1} ${styles.item} ${
                selectedOption === "Easy" ? styles.selected : ""
              }`}
              onClick={() => {
                handleChange("Easy");
                options("Easy");
              }}
            >
              Easy
            </button>
            <button
              className={`${styles.btnItem2} ${styles.item} ${
                selectedOption === "Medium" ? styles.selected : ""
              }`}
              onClick={() => {
                handleChange("Medium");
                options("Medium");
              }}
            >
              Medium
            </button>
            <button
              className={`${styles.btnItem3} ${styles.item} ${
                selectedOption === "Hard" ? styles.selected : ""
              }`}
              onClick={() => {
                handleChange("Hard");
                options("Hard");
              }}
            >
              Hard
            </button>
          </div>
          {/* <select
            onChange={handleChange}
            className={styles.level}
            name="category"
            id="category"
          >
            <option value="Easy" className={styles.optionItem}>
              Easy
            </option>
            <option value="Medium" className={styles.optionItem}>
              Medium
            </option>
            <option value="Hard" className={styles.optionItem}>
              Hard
            </option>
          </select> */}
          <div className={styles.go_button_container}>
            <button className={styles.start} onClick={starGame}>
              LET`S GO
            </button>
          </div>
        </div>
      </section>,
      document.getElementById("modal")
    );
  }
};
