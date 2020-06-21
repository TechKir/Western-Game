import React,{useEffect} from 'react';
import GameStatus from './constants/GameStatus';

const Win = props => {

    useEffect(() => {
      const victorySound=new Audio('../../assets/sounds/victory.wav')
      victorySound.play();
    }, []);

    return (
        <div className='gameFinished'>
            <h1>Congratulations</h1>
            <p>You release the city!</p>
            <p>Would you like to <span onClick={() => props.setGameStatusHandler(GameStatus.ENTER_SCREEN)} className='blink_me'>play again</span>?</p>
        </div>
    )
};

export default Win;