import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import style from "../../style/components/CompletedChallenges.module.css";

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <div className={style.completedChallenges}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
