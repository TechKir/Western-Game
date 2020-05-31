import React,{useState,useEffect} from 'react';
import EnterScreen from '../EnterScreen';

const App = () => {
    const [gameScreen,setGameScreen]=useState(false);

    const handleScreen = () => {
        setGameScreen(gameScreen ? false : true)
    };

    if (gameScreen===false){
        return <div className='enterScreen'><EnterScreen changeScreen={handleScreen}/></div>
    } else {
        return (
            <div>
                <img src='../../../assets/img/1380.jpg'></img>
            </div>
        );
    };
};

export default App;