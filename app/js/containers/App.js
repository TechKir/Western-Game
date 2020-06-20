import React, { useState, useEffect } from "react";
import EnterScreen from "../EnterScreen";
import Game from "../Game";
import GameOver from "../GameOver";

const App = () => {
  const [gameStatus, setGameStatus] = useState(0);
  const [musicBackground, setMusicBackground] = useState(
    new Audio(
      "../../assets/sounds/background/tobias_weber_-_Tracing_My_Steps_1.mp3"
    )
  );

  useEffect(() => {
    musicBackground.volume = 0.5;
    musicBackground.play();
  }, []);

  useEffect(() => {
    if (gameStatus === 2) {
      musicBackground.pause();
    }
  }, [gameStatus]);

  const handleScreen = () => {
    setGameScreen(gameScreen ? false : true);
  };

  switch (gameStatus) {
    case 0:
      return <EnterScreen setGameStatusHandler={setGameStatus} />;
    case 1:
      return <Game setGameStatusHandler={setGameStatus} />;
    case 2:
      return <GameOver setGameStatusHandler={setGameStatus} />;
  }
};

export default App;
