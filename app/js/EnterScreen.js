import React, {useState,useEffect} from 'react';

const EnterScreen = ({changeScreen}) =>{

    const [startOpacity,setStartOpacity]=useState(25);
    const [increase,setIncrease]=useState(true);

    useEffect(() => {
        if(increase === false){
          return 
        };
        if(increase===true){
          const timeout = setTimeout(() => {
            setStartOpacity(startOpacity + 1);
            if (startOpacity === 75){
              setIncrease(false);
            };
          }, 20);

          return () => clearInterval(timeout);
        };
    },[startOpacity]);

    useEffect(() => {
      if(increase === true){
        return 
      };
      if(increase === false){
        const timeout = setTimeout(() => {
          setStartOpacity(startOpacity - 1);
          if ( startOpacity === 25){
            setIncrease(true);
          };
        }, 20);

        return () => clearInterval(timeout);
      };
    },[startOpacity]);

    return (
        <div className='enterScreen'>
            <div><h1 onClick={changeScreen} style={{opacity:startOpacity+'%'}}>Start a game</h1></div>
        </div>
    );
};

export default EnterScreen;
