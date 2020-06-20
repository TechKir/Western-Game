import React, { useState, useEffect } from "react";
import EnterScreen from "../EnterScreen";
import Game from "../Game";
import GameOver from "../GameOver";
import Win from '../Win';

const App = () => {
    const [gameStatus, setGameStatus] = useState(0);
    const [musicBackground, setMusicBackground] = useState(new Audio("../../assets/sounds/background/tobias_weber_-_Tracing_My_Steps_1.mp3"));
    const [score, setScore]=useState(0);
  
    useEffect(() => {
        if (gameStatus===0){
            musicBackground.volume = 0.5;
            musicBackground.load();
            musicBackground.play();
        }
    }, [gameStatus]);

    useEffect(() => {
        if (gameStatus===2){
            musicBackground.pause();
        }
    }, [gameStatus]);

    useEffect(() =>{
        if (gameStatus===3){
            musicBackground.volume = 1;
        }
    },[gameStatus])

    switch (gameStatus) {
        case 0:
            return <EnterScreen setGameStatusHandler={setGameStatus} />;
        case 1:
            return <Game setGameStatusHandler={setGameStatus} setScoreHandler={setScore}/>;
        case 2:
            return <GameOver setGameStatusHandler={setGameStatus} killsScore={score}/>;
        case 3:
            return <Win setGameStatusHandler={setGameStatus}/>;
    }
};

export default App;
