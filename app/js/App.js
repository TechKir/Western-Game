import React, { useState, useEffect } from "react";
import EnterScreen from "./EnterScreen";
import Game from "./Game";
import GameOver from "./GameOver";
import Win from './Win';
import GameStatus from './constants/GameStatus';

const App = () => {
    const [gameStatus, setGameStatus] = useState(GameStatus.ENTER_SCREEN);
    const [musicBackground, setMusicBackground] = useState(new Audio("../../assets/sounds/background/tobias_weber_-_Tracing_My_Steps_1.mp3"));
    const [score, setScore]=useState(0);
  
    useEffect(() => {
        if (gameStatus===GameStatus.ENTER_SCREEN){
            musicBackground.volume = 0.5;
            musicBackground.load();
            musicBackground.play();
        } 
        else if(gameStatus===GameStatus.GAME_OVER){
            musicBackground.pause();
        }
        //return () => setMusicBackground(null) // zmiana od wojtka. błąd:nie można zapauzowa nulla.
    }, [gameStatus]);

    switch (gameStatus) {
        case GameStatus.ENTER_SCREEN:
            return <EnterScreen setGameStatusHandler={setGameStatus} />;
        case GameStatus.GAME:
            return <Game setGameStatusHandler={setGameStatus} setScoreHandler={setScore}/>;
        case GameStatus.GAME_OVER:
            return <GameOver setGameStatusHandler={setGameStatus} killsScore={score}/>;
        case GameStatus.WIN:
            return <Win setGameStatusHandler={setGameStatus}/>;
    }
};

export default App;
