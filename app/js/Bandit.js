import React,{useState,useEffect} from 'react';

const Bandit = ({left,top, visible}) => {
    return <img className={`bandit ${visible ? 'visible' : 'unvisible'}`}  style={{left, top}} src='../../../assets/img/enemy/bandit.png' scrolling='no'/>
}

export default Bandit