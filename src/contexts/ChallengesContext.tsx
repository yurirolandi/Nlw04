import { createContext, useState, ReactNode } from "react";
import challenges from "../../challenges.json";
interface challengesPoviderProps {
  children: ReactNode;
}

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}
interface challengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenges: Challenge;
  experienceToNetxLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

export const ChallengesContext = createContext({} as challengesContextData);
export function ChallengesProvider({ children }: challengesPoviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenges, setActiveChallenges] = useState(null);

  const experienceToNetxLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenges(challenge);
  }

  function resetChallenge() {
    setActiveChallenges(null);
  }
  return (
    <ChallengesContext.Provider
      value={{
        level: level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenges,
        resetChallenge,
        experienceToNetxLevel,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
