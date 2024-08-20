import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Login.module.css";
import Image from "next/image";
import { RegisterModal } from "@/components/register-modal/RegisterModal";
import { RegisterForm } from "@/components/register/RegisterForm";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    player: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    player: "",
    password: "",
    error: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      error:''
    }));
  };

  const loginData = {
    password: formData.password,
  };

  formData.player.includes("@")
    ? (loginData.email = formData.player)
    : (loginData.nickname = formData.player);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.player) {
      newErrors.player = "email o nickname requeridos";
      isValid = false;
    } else if (!loginData.password) {
      newErrors.password = "password requerido";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "https://masterquestionback-production.up.railway.app/game/players/login",
        loginData
      );

      const token = response.data.token;
      const user = response.data.player;
      if (response.status === 200) {
        router.push("/game");
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error) {
      if (error.response) {
        setErrors((prev) => ({
          ...prev,
          error: error.response.data?.error,
        }));
        console.log(error.response.data?.error);
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error(error.message);
      }
    }
  };
  return (
    <section className={styles.login_page_container}>
      <section className={styles.login_register_container}>
        <div className={styles.logo_container}>
          <Image
            onClick={() => router.push("/")}
            src="/images/mq_1.png"
            alt="logo-white"
            width={250}
            height={250}
            className={styles.image_}
          />
        </div>
        <div className={styles.login_container}>
          <form className={styles.login_form} onSubmit={handleSubmit}>
            <p
              style={{
                position: "absolute",
                top: "-15px",
                color: "lightcoral",
              }}
            >
              {errors && errors.player
                ? errors.player
                : errors.password
                ? errors.password
                : errors.error
                ? errors.error
                : ""}
            </p>

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
              value={"Continuar"}
              type="submit"
            />
            <button type="button" className={styles.create_form_button} onClick={openModal}>
              Crear cuenta
            </button>
            <p
              style={{
                position: "absolute",
                bottom: "-20px",
                color: "lightblack",
                fontSize:'0.7rem'
              }}
            >
              By TEV STUDIO
            </p>


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
export default Login;
