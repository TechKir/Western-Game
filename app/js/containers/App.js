import React,{useState} from 'react';
import EnterScreen from '../EnterScreen';
import GameScreen from '../GameScreen';

const App = () => {
    const [gameScreen,setGameScreen]=useState(true);

    const handleScreen = () => {
        setGameScreen(gameScreen ? false : true)
    };
    
    if (gameScreen===false){
        return <div className='enterScreen'><EnterScreen changeScreen={handleScreen}/></div>
    } else {
        return <div className='gameScreen'><GameScreen/></div>
    };
};

export default App;