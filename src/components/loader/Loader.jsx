import React from "react";
import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <section className={styles.loader_container}>
      <div className={styles.loader}></div>
    </section>
  );
};
