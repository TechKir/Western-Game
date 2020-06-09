import React,{useState,useEffect} from 'react';
import EnterScreen from '../EnterScreen';
import GameScreen from '../GameScreen';

const App = () => {
    const [gameScreen,setGameScreen]=useState(true);
    const [bandits,setBandits]=useState([{left:18.2+'vw',top:56+'vh', visible:true},{left:30.7+'vw',top:56+'vh', visible:false},{left:52.8+'vw',top:60+'vh', visible:false},{left:68+'vw',top:56+'vh', visible:false},{left:76.5+'vw',top:58+'vh', visible:false},{left:83.5+'vw',top:56+'vh', visible:false},{left:90.3+'vw',top:58+'vh', visible:false},{left:105.3+'vw',top:57+'vh', visible:false},{left:111.8+'vw',top:57+'vh', visible:false},{left:136.2+'vw',top:57+'vh', visible:false},{left:142.6+'vw',top:57+'vh', visible:false},{left:164.3+'vw',top:57+'vh', visible:false},{left:176.6+'vw',top:57+'vh', visible:false},{left:187.8+'vw',top:57+'vh', visible:false},{left:201.2+'vw',top:57+'vh', visible:false},{left:215+'vw',top:57+'vh', visible:false},{left:234.4+'vw',top:57+'vh', visible:false},{left:242.3+'vw',top:57+'vh', visible:false},{left:248.8+'vw',top:55+'vh', visible:false},{left:255+'vw',top:55+'vh', visible:false},{left:261.3+'vw',top:55+'vh', visible:false},{left:300,top:34+'vh', visible:false},{left:464,top:22+'vh', visible:false},{left:635,top:33+'vh', visible:false},{left:831,top:35+'vh', visible:false},{left:940,top:35+'vh', visible:false},{left:1050,top:35+'vh', visible:false},{left:794,top:22+'vh', visible:false},{left:940,top:14+'vh', visible:false},{left:1092,top:22+'vh', visible:false},{left:1427,top:35+'vh', visible:false},{left:1525,top:35+'vh', visible:false},{left:1621,top:35+'vh', visible:false},{left:1718,top:35+'vh', visible:false},{left:1400,top:10 +'vh', visible:false},{left:1570,top:1+'vh', visible:false},{left:1730,top:10+'vh', visible:false},{left:1968,top:35+'vh', visible:false},{left:2095,top:35+'vh', visible:false},{left:2220,top:35+'vh', visible:false},{left:2345,top:35+'vh', visible:false},{left:2468,top:35+'vh', visible:false},{left:2594,top:35+'vh', visible:false},{left:2719,top:35+'vh', visible:false},{left:2015,top:0.8+'vh', visible:false},{left:2684,top:0.8+'vh', visible:false},{left:3098,top:33+'vh', visible:false},{left:3218,top:33+'vh', visible:false},{left:3339,top:33+'vh', visible:false},{left:3066,top:12+'vh', visible:false},{left:3215,top:4+'vh', visible:false},{left:3368,top:12+'vh', visible:false},{left:3545,top:33+'vh', visible:false},{left:3675,top:33+'vh', visible:false},{left:3805,top:33+'vh', visible:false},{left:3497,top:15+'vh', visible:false},{left:3673,top:0.7+'vh', visible:false},{left:3850,top:15+'vh', visible:false},{left:4234,top:0.8+'vh', visible:false},{left:4652,top:31+'vh', visible:false},{left:4819,top:25+'vh', visible:false},{left:260+'vw',top:30+'vh', visible:true}])

    // this function change boolean 'visible' property on a random bandit:
    const showBandit = () => {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let randomNumber=getRandomIntInclusive(0,61)
        bandits[randomNumber].visible='true'
        setBandits(prevBandits => {
            return [...prevBandits,prevBandits[randomNumber].visible='true']
        })
        console.log('Uwaga Bandyta się pojawił!')
    };

    useEffect( () => {
        const mainInterval=setInterval( () => {
            showBandit()
        },3000)
        return () => clearInterval(mainInterval)
    },[bandits]);

    const handleClick = bandit => {
        return setBandits(prevState => {
            //bandit.visible=false
            return [...prevState]        
        })
    };

    const handleScreen = () => {
        setGameScreen(gameScreen ? false : true)
    };
    
    if (gameScreen===false){
        return <div className='enterScreen'><EnterScreen changeScreen={handleScreen}/></div>
    } else {
        return <GameScreen bandits={bandits} handleClick={handleClick}/>
    };
};

export default App;