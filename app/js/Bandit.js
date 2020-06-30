import React from 'react';
import banditUrl from '../../assets/img/enemy/bandit.png';

const Bandit = ({left,top, visible, handleClick}) => {
    return <img onClick={handleClick} className={`bandit ${visible ? 'visible' : 'unvisible'} `}  style={{left, top}} src={banditUrl} scrolling='no'/>
};

export default Bandit;