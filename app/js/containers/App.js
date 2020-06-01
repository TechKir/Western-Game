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
            <div >
                <img className='gameScreen'src='../../../assets/img/town/town3.jpg' scrolling='no'></img>
            </div>
        );
    };
};

export default App;