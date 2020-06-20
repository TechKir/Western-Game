import React,{useState,useEffect} from 'react';

const Win = props => {
    const [startOpacity,setStartOpacity]=useState(70);
    const [increase,setIncrease]=useState(true);

    useEffect(() => {
      if(!increase){
        return 
      };  
      
      const timeout = setTimeout(() => {
        setStartOpacity(startOpacity + 1);
        if (startOpacity === 97){
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
          if ( startOpacity === 70){
            setIncrease(true);
          };
        }, 20);

        return () => clearTimeout(timeout);
      };
    },[startOpacity]);

    useEffect(() => {
      const victorySound=new Audio('../../assets/sounds/victory.wav')
      victorySound.play();
    }, []);

    return (
        <div className='win'>
            <h1>Congratulations</h1>
            <p>You release the city!</p>
            <p>Would you like to <span onClick={() => props.setGameStatusHandler(0)} style={{opacity:startOpacity+'%'}}>play again</span>?</p>
        </div>
    )
};

export default Win;