import React, { useState, useEffect } from "react";
import EnterScreen from "./EnterScreen";
import Game from "./Game";
import GameOver from "./GameOver";
import Win from './Win';
import GameStatus from './constants/GameStatus';
import westernSong from '../../assets/sounds/background/tobias_weber_-_Tracing_My_Steps_1.mp3';

const App = () => {

    const [gameStatus, setGameStatus] = useState(GameStatus.ENTER_SCREEN);
    const [musicBackground, setMusicBackground] = useState(new Audio(westernSong));
    const [score, setScore]=useState(0);

    useEffect(() => {
        if (gameStatus===GameStatus.GAME){
            musicBackground.volume = 0.5;
            musicBackground.load();
            musicBackground.play();
        } 
        else if(gameStatus===GameStatus.GAME_OVER || gameStatus===GameStatus.ENTER_SCREEN){
            musicBackground.pause();
        }
        //return () => setMusicBackground(null) // I have to comment this line because  - Error:null cannot be paused.
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
