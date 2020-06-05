import React,{useState,useEffect} from 'react';

const GameScreen = () => {

    const [move, setMove] = useState(0)

    //it works
    // $(document).ready(function(){
    //     alert('jquery loaded')
    // });

    const moveImage = event => {
        const horizontalPosition = event.clientX;
        const screenWidth = $(window).width();           //total relative screen width - jQuery method
        const rightBorder=screenWidth-(0.1*screenWidth); //cursor width position when img start to move right
        const leftBorder = 100;                          //cursor width position when img start to move left

        if (horizontalPosition==Math.round(rightBorder)){
            console.log('jestesmy w ifie right'); 
            var speed = setInterval( () => {
                setMove(prevMove => prevMove+1)
            },20)
            
        } else if (horizontalPosition<rightBorder){
            console.log('czyszczenie')
            clearInterval(speed)
        }
    };

    return <div class='flexbox'><img onMouseMove={moveImage} className='gameScreen' style={{right:move+'px'}}src='../../../assets/img/town/town3.jpg' scrolling='no'></img></div>
};

export default GameScreen;

