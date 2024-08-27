import { useState } from "react";
import styles from "../../styles/Login.module.css";
import axios from "axios";

export const RegisterForm = ({ closeModal }) => {
  const [resErrorMessage, setResErrorMessage] = useState("");
  const [resSuccesMessage, setResSuccesMessage] = useState("");
  const [formData, setFormData] = useState({
    nickname: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setResErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://masterquestionback-production.up.railway.app/game/players",
        formData
      );
      console.log(response);
      if (response.status === 201) {
        setResSuccesMessage(response.data.message);
        setResErrorMessage("");
        setTimeout(() => {
          closeModal();
        }, 1000);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setResErrorMessage(error.response.data.error);
        setResSuccesMessage("");
      } else {
        console.log("otro error");
      }
    }
  };

  return (
    <div className={styles.register_container}>
      <form className={styles.register_form} onSubmit={handleSubmit}>
        <p
          style={{
            position: "absolute",
            top: "-15px",
            color: "lightcoral",
          }}
        >
          {resErrorMessage}
        </p>
        <p
          style={{
            position: "absolute",
            top: "-15px",
            color: "#28a745",
          }}
        >
          {resSuccesMessage}
        </p>
        <input
          onChange={handleChange}
          name="nickname"
          placeholder="nickname"
          type="text"
          className={styles.input_register_form}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="email"
          type="email"
          className={styles.input_register_form}
        />
        <input
          onChange={handleChange}
          name="password"
          placeholder="password"
          type="text"
          className={styles.input_register_form}
        />
        <input
          className={styles.submit_form_button}
          value={"Register"}
          type="submit"
        />
      </form>
    </div>
  );
};
