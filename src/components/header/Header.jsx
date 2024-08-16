import { useEffect, useState } from "react";
import style from "./Header.module.css";
import Image from "next/image";

export const Header = ({}) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  }, []);

  return (
    <header className={style.container}>
      <section className={style.logo_container}>
      <Image
        src="/images/logo-blue.png"
        alt="logo-white"
        width={140}
        height={53}
        className={style.image_}
      />

    
      </section>
      <section>
      {
  <p className={style.welcome_message}>Bienvenid@: <span>{user?.nickname}</span></p>
}
      </section>
    </header>
  );
};
