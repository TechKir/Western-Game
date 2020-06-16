import React,{Component} from 'react';
import Bandit from './Bandit';
import image from '../../assets/img/town/town.jpg';

class GameScreen extends Component {

    state = {
        move: 0,
        dimensions: {
           height: 0,
           width: 0 
        }
    };

    //Functions below allow to move a screen(img) in different speed:
    onEnterR1 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ 
                move: prevState.dimensions.width<= prevState.move+(prevState.dimensions.width*0.35) ? prevState.move : prevState.move +1}))
        }, 1)
    };

    onEnterR2 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ 
                move: prevState.dimensions.width<= prevState.move+(prevState.dimensions.width*0.35) ? prevState.move : prevState.move +15}))
        }, 1)
    };

    onEnterR3 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ 
                move: prevState.dimensions.width<= prevState.move+(prevState.dimensions.width*0.35) ? prevState.move : prevState.move +25}))
        }, 1)
    };

    onEnterL1 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState =>  ({
                 move: prevState.move<=15 ? prevState.move : prevState.move -1
                })
            )
        }, 1)
    };

    onEnterL2 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState =>  ({
                 move: prevState.move<=15 ? prevState.move : prevState.move -15
                })
            )
        }, 1)
    };

    onEnterL3 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState =>  ({
                 move: prevState.move<=25 ? prevState.move : prevState.move -25
                })
            )
        }, 1)
    };

    onLeave = e => {
        clearInterval(this.interval)
    };
    //--end--//

    //Destructuring 'event.target' for img. 
    onImgLoad = ({target:img}) => {       
        this.setState({dimensions:{height:img.offsetHeight,
                                   width:img.offsetWidth}});
    };

    componentWillUnmount(){
        clearInterval(this.interval);
    };

    render() {
        
        const singleShot = () => {
            const shotSoundsArray=['../../assets/sounds/Winchester/winchester1.mp3','../../assets/sounds/Winchester/winchester2.mp3','../../assets/sounds/Winchester/winchester3.mp3','../../assets/sounds/Winchester/winchester4.mp3','../../assets/sounds/Winchester/winchester5.mp3','../../assets/sounds/Winchester/winchester6.mp3','../../assets/sounds/Winchester/winchester7.mp3','../../assets/sounds/Winchester/winchester8.mp3','../../assets/sounds/Winchester/winchester9.mp3','../../assets/sounds/Winchester/winchester10.mp3','../../assets/sounds/Winchester/winchester11.mp3','../../assets/sounds/Winchester/winchester12.mp3','../../assets/sounds/Winchester/winchester13.mp3','../../assets/sounds/Winchester/winchester14.mp3','../../assets/sounds/Winchester/winchester15.mp3','../../assets/sounds/Winchester/winchester16.mp3','../../assets/sounds/Winchester/winchester17.mp3','../../assets/sounds/Winchester/winchester18.mp3'];

            function getRandomSound(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };
            let randomShot=getRandomSound(0,17);

            let shotSound = new Audio(shotSoundsArray[randomShot]);
            shotSound.play();
        };

        const { move } = this.state;
        const { bandits,handleClick,life,kills } = this.props;

        const actualLife = () => {
            if (life===3){
                return (
                    <React.Fragment>
                        <img className='heart' src='../../assets/img/heart.png'></img>
                        <img className='heart' src='../../assets/img/heart.png'></img>
                        <img className='heart' src='../../assets/img/heart.png'></img>
                    </React.Fragment>
                )
            } else if (life===2){
                return (
                    <React.Fragment>
                        <img className='heart' src='../../assets/img/heart.png'></img>
                        <img className='heart' src='../../assets/img/heart.png'></img>
                    </React.Fragment>
                )
            } else if (life===1){
                return <img className='heart' src='../../assets/img/heart.png'></img>
            }
        }

        return (
            <div onClick={singleShot} class='gameContainer'>                            
                <div className='intervalDiv' onMouseEnter={this.onEnterR3} onMouseLeave={this.onLeave} />
                <div className='intervalDiv' onMouseEnter={this.onEnterR2} onMouseLeave={this.onLeave} />
                <div className='intervalDiv' onMouseEnter={this.onEnterR1} onMouseLeave={this.onLeave} />
                <div className='intervalDiv' onMouseEnter={this.onEnterL3} onMouseLeave={this.onLeave} />
                <div className='intervalDiv' onMouseEnter={this.onEnterL2} onMouseLeave={this.onLeave} />
                <div className='intervalDiv' onMouseEnter={this.onEnterL1} onMouseLeave={this.onLeave} />
                <div className='heartBox'>{actualLife()}</div>
        <div className='killsBox'><img className='skull' src='../../assets/img/skull2.png'/><div>= {kills}</div></div>
                <div className='gameImg' style={{right:move+'px'}}>
                    <img className='gameImg' onLoad={this.onImgLoad} src={image} scrolling='no'/>
                    {bandits.map( (element,index) => {                 
                        return <Bandit handleClick={() => handleClick(index)} key={index} left={element.left} top={element.top} visible={element.visible}/>
                    })}                    
                </div>
            </div>
        );
    };
};

export default GameScreen;