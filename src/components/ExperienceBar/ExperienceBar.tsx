import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "../../style/components/ExperienceBar.module.css";

export default function ExperienceBar() {
  const { currentExperience, experienceToNetxLevel } = useContext(
    ChallengesContext
  );

  const percentToNetxtLevel =
    Math.round(currentExperience * 100) / experienceToNetxLevel;
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNetxtLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNetxtLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNetxLevel} xp</span>
    </header>
  );
}
