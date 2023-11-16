import styles from './TimePoints.module.css'

export const TimeBarr = ({ points, time}) => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.clock}>{time}</div>
        <div className={styles.gold}>{points}</div>
      </section>
    </>
  );
}
