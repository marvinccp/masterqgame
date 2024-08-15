import useGame from "@/hooks/useGame";
import style from "./Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Header = ({}) => {
  const [user, setUser] = useState({});
  console.log(user);
  const { handleLogout } = useGame();
  const router = useRouter();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  }, []);

  return (
    <header className={style.container}>
      <section className={style.logo_container}>
      <Image
        onClick={() => router.push("/")}
        src="/images/logo-blue.png"
        alt="logo-white"
        width={140}
        height={53}
        className={style.image_}
      />

      <button className={style.buton_logout} onClick={handleLogout}>
        logout
      </button>

      </section>
      <section>
      {
  <p className={style.welcome_message}>Bienvenid@: <span>{user.nickname}</span></p>
}
      </section>
    </header>
  );
};
