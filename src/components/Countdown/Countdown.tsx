import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "../../style/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsactive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  function startCountdown() {
    setIsactive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsactive(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      console.log("Finalizou a operação");
      setHasFinished(true);
      setIsactive(false);
      startNewChallenge()
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.contdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              onClick={resetCountdown}
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              onClick={startCountdown}
              className={styles.countdownButton}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
