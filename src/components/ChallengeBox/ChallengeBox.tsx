import { useContext } from "react";
import styles from "../../style/components/ChallengeBox.module.css";
import { ChallengesContext } from "../../contexts/ChallengesContext";

export function ChallengeBox() {
  const { activeChallenges, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenges ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenges.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenges.type}.svg`} />
            <strong>Novo Desafio</strong>
            <p>{activeChallenges.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio.</strong>
          <p>
            <img src="icons/level-up.svg" alt="Levelup>" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
