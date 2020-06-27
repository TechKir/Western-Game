import React from 'react';
import GameStatus from './constants/GameStatus';

const EnterScreen = ({setGameStatusHandler}) =>{

    return (
        <div className='enterScreen'>
            <h1>Western Shot</h1>
            <p > You are the last man stand who can free a city from evil bastards. You must kill 50 opponents to reach the goal. Be careful, the city is so big that you can't see all the buildings. You have to look around. Bandits can hide everywhere. Every time they want to shoot you, they must reload their weapons and have some time to aim at you. So... when you hear that, you can be sure that a bastard has appeared for shoot down. It is speedy observation game so you should be focus. Good luck!</p>
            <h2 onClick={() => setGameStatusHandler(GameStatus.GAME)} className='blink_me'>Start a game</h2>
        </div>
    );
};

export default EnterScreen;

