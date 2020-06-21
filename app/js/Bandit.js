import React from 'react';

const Bandit = ({left,top, visible, handleClick}) => {
    return <img onClick={handleClick} className={`bandit ${visible ? 'visible' : 'unvisible'} `}  style={{left, top}} src='../../../assets/img/enemy/bandit.png' scrolling='no'/>
};

export default Bandit;