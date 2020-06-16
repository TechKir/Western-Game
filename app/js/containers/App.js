import React,{useState,useEffect} from 'react';
import EnterScreen from '../EnterScreen';
import Game from '../Game';

const App = () => {

    const [gameScreen,setGameScreen]=useState(false);

    //in progress:
    // const [musicOn,setMusicOn]=useState(true)

    // const musicBackground= new Audio('../../assets/sounds/tobias_weber_-_Tracing_My_Steps_1.mp3');

    // const isPlay = () => {
    //     if(musicOn==true){
    //         console.log('wlaczam muzyke')
    //         musicBackground.volume=0.5
    //         musicBackground.play()
    //     } else if(musicOn==false){
    //         console.log('off music')
    //         musicBackground.pause()
    //     }
    // }

    // const musicOff = () => {
    //     console.log('wylaczam muzyke')
    //     musicBackground.pause()
    //     setMusicOn(false)
    // };

    // useEffect(() => {
    //     musicOff();
    //     isPlay();
    // },[musicOn]);

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