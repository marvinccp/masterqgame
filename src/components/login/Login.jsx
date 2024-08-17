import React, { useState } from "react";
import axios from 'axios';

import styles from "./Login.module.css";

import { RegisterModal } from "../register-modal/RegisterModal";
import { RegisterForm } from "../register/RegisterForm";
import Image from "next/image";



export const Login = ({ handleLogin }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [formData, setFormData] = useState({
    player: "",
    password: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginData = {
    password: formData.password,
  };
  
  formData.player.includes("@")
  ? (loginData.email = formData.player)
  : (loginData.nickname = formData.player);
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://masterquestionback-production.up.railway.app/game/players/login",
        loginData
      );
      const token = response.data.token;
      if (response.status === 200) {
        handleLogin();
        localStorage.setItem("token", token);
      }
    } catch (error) {
      if (error.response?.data === "Wrong pass") {
        console.log("Wrong Pass");
      }
      console.log(error.message);
    }
  };
  return (
    <section className={styles.login_page_container}>
      <section className={styles.login_register_container}>
        <div className={styles.logo_container}>
        <Image
        src="/images/mq_1.png"
        alt="logo-white"
        width={250}
        height={250}
        className={styles.image_}
      />
        </div>
        <div className={styles.login_container}>
          <form className={styles.login_form} onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              name="player"
              placeholder="nickname / email"
              type="text"
              className={styles.input_login_form}
            />
            <input
              className={styles.input_login_form}
              onChange={handleChange}
              name="password"
              placeholder="password"
              type="password"
            />
            <input
              className={styles.submit_form_button}
              value={"Login"}
              type="submit"
            />
            <button
              className={styles.create_form_button}
              onClick={openModal}
            >Crear cuenta</button>
        
          </form>
        </div>
      </section>
      <>
      {isModalOpen && (
          <RegisterModal isOpen={isModalOpen} onClose={closeModal}>
            <RegisterForm closeModal={closeModal} />
          </RegisterModal>
        )}
      </>
    </section>
  );
};