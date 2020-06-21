import React, {Component} from 'react';
import GameScreen from './GameScreen';
import Bandits from './data/bandits';
import GameStatus from './constants/GameStatus';

class Game extends Component {
    state= {
        life: 3,
        kills:0,
        bandits:Bandits
    } 

    // //This function change boolean 'visible' property on a random bandit:
    showBandit = () => {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let randomNumber=getRandomIntInclusive(0,this.state.bandits.length-1)
        this.setState(prevState => {
            prevState.bandits[randomNumber].visible='true'
            return [...prevState]
        })
    };

    componentDidMount() {
        this.mainInterval=setInterval( () => {
            this.showBandit();
            const gunReload = new Audio('../../assets/sounds/bandit.shot/reload.mp3');
            gunReload.play();

            this.deathInterval= setTimeout( () => {
                const shot = new Audio('../../assets/sounds/bandit.shot/shot1.mp3');
                shot.play();
                this.setState(prevState => {
                    return {
                        life:prevState.life-1
                    }
                });             
            },5000)
        },3000)
    };

    componentWillUnmount(){
        clearInterval(this.mainInterval);
        clearTimeout(this.deathInterval);
    };

    componentDidUpdate() {
        if(this.state.kills==50 && this.state.life>0){
            this.props.setGameStatusHandler(GameStatus.WIN);
        }
        if(this.state.life === 0 ){
            this.props.setScoreHandler(this.state.kills)
            this.props.setGameStatusHandler(GameStatus.GAME_OVER);
        }
    };

    handleClick = banditIndex => {
        clearTimeout(this.deathInterval);
        this.setState(prevState => {
            return {
                kills:prevState.kills+1
            }
        });   

        return this.setState(prevState => {
            prevState.bandits[banditIndex].visible=false
            return [...prevState]        
        })
    };

    render() {        
        return <GameScreen bandits={this.state.bandits} life={this.state.life} kills={this.state.kills} handleClick={this.handleClick}/>        
    }
};

export default Game;
