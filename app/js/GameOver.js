import React from 'react';
import GameStatus from './constants/GameStatus';

const GameOver = props =>{

    return (
      <div className='gameFinished gameover'>
        <h1>GAME OVER</h1>
        <p>You faild. The city is still terrorized.</p>
        <p>Kills:{props.killsScore} </p>
        <p>Would you like to <span onClick={() => props.setGameStatusHandler(GameStatus.ENTER_SCREEN)} className='blink_me'>play again</span>?</p>
      </div>
    )    
};

export default GameOver;