import useGame from "@/hooks/useGame";
import React from "react";

const ButtonClose = ({ name }) => {
  const { handleLogout } = useGame();

  return (
    <>
      <button onClick={handleLogout}>{name}</button>
    </>
  );
};
export  default ButtonClose