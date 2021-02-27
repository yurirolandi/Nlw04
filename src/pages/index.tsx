import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChallenges";
import { Countdown } from "../components/Countdown/Countdown";
import ExperienceBar from "../components/ExperienceBar/ExperienceBar";
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox";
import Profile from "../components/Perfil/Perfil";
import styles from "../style/pages/Home.module.css";
import Head from 'next/head';
export default function Home() {
  return (
    <div className={styles.containerHome}>

      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
