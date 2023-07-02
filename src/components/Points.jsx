import GameLayout from "@/layouts/GameLayout";
export const Points = ({ points, correct }) => {
  let reward;
  points > 0 || points <= 5
    ? (reward = "bien")
    : points > 5 || points <= 10
    ? (reward = "muy-bn")
    : "";

  const pointsReward = {
    bien: "BIEEEEEN imagen",
    "muy-bn": "MUY BIEEEEEEN imagen",
  };

  const DEFAULT_REWARD = "You have earned nothing";

  return (
    <>
      <GameLayout />
      <span>Points: {points}</span>
      <span>Points: {correct}</span>
      {pointsReward[reward] || DEFAULT_REWARD}
      <button onClick={() => window.location.reload()}>New Game</button>
    </>
  );
};
