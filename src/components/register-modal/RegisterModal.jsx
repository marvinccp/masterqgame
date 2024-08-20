import styles from "./RegisterModal.module.css";

export const RegisterModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <section className={styles.overlay}>
      <div className={`${styles.modal} ${isOpen ? styles.modalOpen : ""}`}>
        <button className={styles.closeButton} onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </section>
  );
};
