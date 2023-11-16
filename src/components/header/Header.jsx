import style from "./Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export const Header = ({}) => {

  const router = useRouter();
  return (
    <header className={style.container}>
      <Image
        onClick={() => router.push("/")}
        src="/images/logo-white.png"
        alt="logo-white"
        width={140}
        height={53}
        className={style.image_}
      />
      {/* <button onClick={() => router.push("/")} className={style.button_right}>
          New Game
        </button> */}
      <Image
        // onMouseEnter={() => console.log("entro")}
        // onMouseLeave={() => console.log("salgo")}
        className={style.image_}
        src="/icons/config-icon.png"
        alt="config-icon"
        width={35}
        height={35}
      />
    </header>
  );
};
