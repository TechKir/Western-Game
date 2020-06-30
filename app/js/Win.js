import React,{useEffect} from 'react';
import GameStatus from './constants/GameStatus';
import victoryMP3 from '../../assets/sounds/victory.wav';

const Win = props => {

    useEffect(() => {
      const victorySound=new Audio(victoryMP3)
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