import { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
import useResume from "@/hooks/useResume";
import Link from "next/link";
const start = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export const Modal = ({ starGame, handleChange, optionError }) => {
  const [browser, setBrowser] = useState(false);
  const [selectedOption, setselectedOption] = useState("");

  const options = (value) => {
    setselectedOption(value);
  };

  useEffect(() => {
    setBrowser(true);
  }, []);

  const { handleLogout } = useResume();

  if (browser) {
    return ReactDOM.createPortal(
      <section className={styles.container}>
        <div className={styles.option_error}>
          <p className={start.className}>{optionError}</p>
        </div>
        <div className={styles.modal}>
          <button onClick={handleLogout} className={styles.logout_button}>
            logout
          </button>
          <Link href={'/top_score'}>
            <button  className={styles.top_score}>
              top score
            </button>
          </Link>
        
          <div className={styles.btns_options}>
            <motion.button
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`${styles.btnItem1} ${styles.item} ${
                selectedOption === "Easy" ? styles.selected : ""
              }`}
              onClick={() => {
                handleChange("Easy");
                options("Easy");
              }}
            >
              Easy
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`${styles.btnItem2} ${styles.item} ${
                selectedOption === "Medium" ? styles.selected : ""
              }`}
              onClick={() => {
                handleChange("Medium");
                options("Medium");
              }}
            >
              Medium
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`${styles.btnItem3} ${styles.item} ${
                selectedOption === "Hard" ? styles.selected : ""
              }`}
              onClick={() => {
                handleChange("Hard");
                options("Hard");
              }}
            >
              Hard
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`${styles.btnItem4} ${styles.item} ${
                selectedOption === "Tecno" ? styles.selected : ""
              }`}
              onClick={() => {
                handleChange("Tecno");
                options("Tecno");
              }}
            >
              Tecno
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`${styles.btnItem5} ${styles.item} ${
                selectedOption === "Sensei" ? styles.selected : ""
              }`}
              onClick={() => {
                handleChange("Sensei");
                options("Sensei");
              }}
            >
              <Image
                className={styles.image5}
                src="/icons/sensei-mode.png"
                alt="logo-sensei"
                width={70}
                height={70}
              />
              Sensei
            </motion.button>
          </div>
      
          <div className={styles.go_button_container}>
            <button
              className={styles.start}
              onClick={() => starGame(selectedOption)}
            >
              JUGAR!!
            </button>
          </div>
        </div>
      </section>,
      document.getElementById("modal")
    );
  }
};
