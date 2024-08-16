import useGame from "@/hooks/useGame";
import React from "react";

const ButtonClose = () => {
  const { handleLogout } = useGame();

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
export  default ButtonClose