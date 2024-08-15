import React, { useState } from "react";
import axios from "axios";
import styles from '../styles/Login.module.css'
import Image from "next/image";
import { RegisterModal } from "@/components/register-modal/RegisterModal";
import { RegisterForm } from "@/components/register/RegisterForm";
import { useRouter } from "next/router";



const Login = ({ handleLogin }) => {
const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [formData, setFormData] = useState({
    player: "",
    password: "",
  });

  console.log(handleLogin);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(formData);
  const loginData = {
    password: formData.password,
  };
  console.log(loginData);
  
  formData.player.includes("@")
  ? (loginData.email = formData.player)
  : (loginData.nickname = formData.player);
  
  console.log(loginData);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://masterquestionback-production.up.railway.app/game/players/login",
        loginData
      );
      const token = response.data.token;
      const user = response.data.player
      if (response.status === 200) {
        router.push('/game')
        localStorage.setItem("token", token);
        localStorage.setItem('user', JSON.stringify(user))
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
export default Login;