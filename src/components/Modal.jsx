import { useEffect, useState } from "react";
import styles from "../styles/Modal.module.css";
import ReactDOM from "react-dom";
import Image from "next/image";

export const Modal = ({ starGame, handleChange }) => {
  const [browser, setBrowser] = useState(false);

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
          <h3 className={styles.text}>
            Welcome!! Are you ready ? <br />
          </h3>
          <h2>Choose your level</h2>
          <select
            onChange={handleChange}
            className={styles.level}
            name="category"
            id="category"
          >
            <option value="Easy" className={styles.option}>
              Easy
            </option>
            <option value="Medium" className={styles.option}>
              Medium
            </option>
            <option value="Hard" className={styles.option}>
              Hard
            </option>
          </select>
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
