import React, {useState,useEffect} from 'react';

const EnterScreen = ({setGameStatusHandler}) =>{

    const [startOpacity,setStartOpacity]=useState(60);
    const [increase,setIncrease]=useState(true);

    useEffect(() => {
        if(!increase){
          return 
        };
   
          const timeout = setTimeout(() => {
            setStartOpacity(startOpacity + 1);
            if (startOpacity === 90){
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
//style={{opacity:startOpacity+'%'}}
    return (
        <div className='enterScreen'>
            <h1>Western Shot</h1>
            <p >You are the last man stand who can free a city from evil bastards. You must kill 50 opponents to reach the goal. Be careful, the city is so big that you can't see all the buildings. You have to look around. Bandits can hide everywhere. Every time they want to shoot you, they must reload their weapons and have some time to aim at you. So... when you hear that, you can be sure that a bastard has appeared for shoot down.</p>
            <h2 onClick={() => setGameStatusHandler(1)} style={{opacity:startOpacity+'%'}}>Start a game</h2>
        </div>
    );
};

export default EnterScreen;
// You are a last man stand who can release the city from the bad bastards. To achive it you have to kill 10 opponents. Be careful, city is big enough that you can't see all the buildings. You have to look around. Bandits can hide everywhere. Every time they want to shoot you they have to reload their gun and have some time to aim on you. So... when you hear it you can be sure that someone aim on you.
