import React,{Component} from 'react';
import Bandit from './Bandit';
import image from '../../assets/img/town/town.jpg';
import Shots from './data/shots';

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
                move: prevState.dimensions.width<= prevState.move+(prevState.dimensions.width*0.35) ? prevState.move : prevState.move +7}))
        }, 1)
    };

    onEnterR3 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ 
                move: prevState.dimensions.width<= prevState.move+(prevState.dimensions.width*0.35) ? prevState.move : prevState.move +14}))
        }, 1)
    };

    onEnterL1 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState =>  ({
                 move: prevState.move<=7 ? prevState.move : prevState.move -1
                })
            )
        }, 1)
    };

    onEnterL2 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState =>  ({
                 move: prevState.move<=7 ? prevState.move : prevState.move -7
                })
            )
        }, 1)
    };

    onEnterL3 = e => {
        this.interval = setInterval(() => {
            this.setState(prevState =>  ({
                 move: prevState.move<=14 ? prevState.move : prevState.move -14
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
            const shotSoundsArray=Shots;

            function getRandomSound(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };
            let randomShot=getRandomSound(0,shotSoundsArray.length-1);

            let shotSound = new Audio(shotSoundsArray[randomShot]);
            shotSound.play();
        };

        const { move } = this.state;
        const { bandits,handleClick,life,kills } = this.props;

        const actualLife = () => {
            if (life===3){
                return (
                    <React.Fragment>
                        <img className='heart' src='../../assets/img/icons/heart.png'/>
                        <img className='heart' src='../../assets/img/icons/heart.png'/>
                        <img className='heart' src='../../assets/img/icons/heart.png'/>
                    </React.Fragment>
                )
            } else if (life===2){
                return (
                    <React.Fragment>
                        <img className='heart' src='../../assets/img/icons/heart.png'/>
                        <img className='heart' src='../../assets/img/icons/heart.png'/>
                    </React.Fragment>
                )
            } else if (life===1){
                return <img className='heart' src='../../assets/img/icons/heart.png'/>
            }
        };

        return (
            <div onClick={singleShot} class='gameContainer'>                            
                <div className='intervalDiv' onMouseEnter={this.onEnterR3} onMouseLeave={this.onLeave}></div>
                <div className='intervalDiv' onMouseEnter={this.onEnterR2} onMouseLeave={this.onLeave}></div>
                <div className='intervalDiv' onMouseEnter={this.onEnterR1} onMouseLeave={this.onLeave}></div>
                <div className='intervalDiv' onMouseEnter={this.onEnterL3} onMouseLeave={this.onLeave}></div>
                <div className='intervalDiv' onMouseEnter={this.onEnterL2} onMouseLeave={this.onLeave}></div>
                <div className='intervalDiv' onMouseEnter={this.onEnterL1} onMouseLeave={this.onLeave}></div>
                <div className='heartBox'>{actualLife()}</div>
                <div className='killsBox'><img className='skull' src='../../assets/img/icons/skull.png'/><div>= {kills}</div></div>
                <div className='gameImg' style={{right:move+'px'}}>
                    <img className='gameImg' onLoad={this.onImgLoad} src={image} scrolling='no'/>
                    {bandits.map( (element,index) => {  
                        if(element.visible=='true'){
                            return <Bandit handleClick={() => handleClick(index)} key={index} left={element.left} top={element.top} visible={element.visible}/>
                        }     
                    })}                
                </div>
            </div>
        );
    };
};

export default GameScreen;
