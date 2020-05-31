import React, {useState,useEffect} from 'react';

const EnterScreen = ({changeScreen}) =>{

    const [startOpacity,setStartOpacity]=useState(20);

    useEffect( () => {
        console.log('start',startOpacity);

        const OpInterval = setInterval( () => {
            if(startOpacity<=20){
                setStartOpacity(prevOpacity => {
                    console.log('start2',startOpacity)
                    if(startOpacity>=80){
                        console.log('wyczyszcozne')
                        return clearInterval(OpInterval)
                    };
                    return prevOpacity+1})
            } else if (startOpacity>=80) {
                setStartOpacity(prevOpacity => {
                    if(startOpacity<=20){
                        console.log('wyczyszcozne')
                        return clearInterval(OpInterval)
                    };
                    return prevOpacity-1})
            };  
        },20);
    },[]);

    console.log('out',startOpacity)
    return (
        <div className='enterScreen'>
            <div><h1 onClick={changeScreen} style={{opacity:startOpacity+'%'}}>Start a game</h1></div>
        </div>
    );
};

export default EnterScreen;
