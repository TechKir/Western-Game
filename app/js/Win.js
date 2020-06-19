import React,{useState,useEffect} from 'react';
import App from './containers/App';

const Win = () => {

    const [startOpacity,setStartOpacity]=useState(70);
    const [increase,setIncrease]=useState(true);
    const [gameScreen,setGameScreen]=useState(false);

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
          if ( startOpacity === 70){
            setIncrease(true);
          };
        }, 20);

        return () => clearTimeout(timeout);
      };
    },[startOpacity]);

    const handleScreen = () => {
        setGameScreen(true)
    };

    if (gameScreen==false){
        return (
            <div className='win'>
                <h1>Congratulations</h1>
                <p>You release the city!</p>
                <p>Would you like to <span onClick={handleScreen} style={{opacity:startOpacity+'%'}}>play again</span>?</p>
            </div>
        )
    } else {
        return <App/>
    }
}

export default Win