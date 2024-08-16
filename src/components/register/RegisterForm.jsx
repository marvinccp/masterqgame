import { useState } from "react";
import styles from "../../styles/Login.module.css";
import axios from 'axios';

export const RegisterForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    nickname: "",
    password: "",
    email: "",
  });
  console.table(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    closeModal();
    try {
      const response = await axios.post(
        "https://masterquestionback-production.up.railway.app/game/players",
        formData
      );
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.register_container}>
      <form className={styles.register_form} onSubmit={handleSubmit}>
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
