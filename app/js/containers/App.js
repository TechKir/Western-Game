import React,{useState,useEffect} from 'react';
import EnterScreen from '../EnterScreen';
import Game from '../Game';

const App = () => {
    const [gameScreen,setGameScreen]=useState(false);

    const handleScreen = () => {
        setGameScreen(gameScreen ? false : true)
    };
    
    if (gameScreen===false){
        return <div className='enterScreen'><EnterScreen changeScreen={handleScreen}/></div>
    } else {
        return <Game/>
    };
};

export default App;