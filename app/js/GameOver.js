import React,{useState,useEffect} from 'react';
import App from './containers/App';

const GameOver = props =>{
    const [startOpacity,setStartOpacity]=useState(60);
    const [increase,setIncrease]=useState(true);
    const [gameScreen,setGameScreen]=useState(false);

    useEffect(() => {
        if(!increase){
          return 
        };
   
          const timeout = setTimeout(() => {
            setStartOpacity(startOpacity + 1);
            if (startOpacity === 100){
              setIncrease(false);
            };
          }, 10);

        return () => clearTimeout(timeout);
    
    },[startOpacity]);

    useEffect(() => {
      if(increase === true){
        return 
      };
      if(increase === false){
        const timeout = setTimeout(() => {
          setStartOpacity(startOpacity - 1);
          if ( startOpacity === 60){
            setIncrease(true);
          };
        }, 10);

        return () => clearTimeout(timeout);
      };
    },[startOpacity]);

    const handleScreen = () => {
        setGameScreen(true)
    };
//style={{opacity:startOpacity+'%'}}
        return (
          <div className='gameover'>
            <h1>GAME OVER</h1>
            <p>You faild. The city is still terrorized.</p>
            <p>Kills:{props.killsScore} </p>
            <p>Would you like to <span onClick={handleScreen} style={{opacity:startOpacity+'%'}}>play again</span>?</p>
          </div>
        )    
};

export default GameOver;