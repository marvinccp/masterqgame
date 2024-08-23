import { useEffect, useState } from "react";
import style from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export const Header = ({category, start}) => {
  console.log(category, start);
  const [user, setUser] = useState({});
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  }, []);


  return (
    <header className={`${style.container} ${category === 'Sensei' && start === true && style.sensei}`}>
      <section className={style.logo_container}>
        <Link href={'/game'}>
        <Image
          src="/images/mq_1.png"
          alt="logo-white"
          width={85}
          height={85}
          className={style.image_}
          />
          </Link>
      </section>
      <section className={style.user_container}>
        <p className={style.user_nickname}>
          <span className={style.mando}></span>
          {user?.nickname}
        </p>
      </section>
    </header>
  );
};
