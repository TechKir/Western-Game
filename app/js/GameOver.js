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
            if (startOpacity === 85){
              setIncrease(false);
            };
          }, 20);

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
        }, 20);

        return () => clearTimeout(timeout);
      };
    },[startOpacity]);

    const handleScreen = () => {
        setGameScreen(true)
    };

    if(gameScreen==false){
        return <div className='gameover'><h1 onClick={handleScreen}  style={{opacity:startOpacity+'%'}}>GAME OVER</h1></div>
    } else {
        return <App/>
    }
};

export default GameOver;