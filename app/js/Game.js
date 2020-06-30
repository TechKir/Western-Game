import React, {Component} from 'react';
import GameScreen from './GameScreen';
//import Bandits from './data/bandits'; // imported Bandits doesn't reset state 'visible' on start again. 
import GameStatus from './constants/GameStatus';
//Sounds:
import banditShot from '../../assets/sounds/bandit.shot/shot1.mp3';
import banditReload from '../../assets/sounds/bandit.shot/reload.mp3';

class Game extends Component {
    state= {
        life: 3,
        kills:0,
        bandits:[{left:'18.2vw',top:'56vh', visible:false},{left:'30.7vw',top:'56vh', visible:false},{left:'52.8vw',top:'60vh', visible:false},{left:'68vw',top:'56vh', visible:false},{left:'76.5vw',top:'58vh', visible:false},{left:'83.5vw',top:'56vh', visible:false},{left:'90.3vw',top:'58vh', visible:false},{left:'105.3vw',top:'57vh', visible:false},{left:'111.8vw',top:'57vh', visible:false},{left:'136.2vw',top:'57vh', visible:false},{left:'142.6vw',top:'57vh', visible:false},{left:'164.3vw',top:'57vh', visible:false},{left:'176.6vw',top:'57vh', visible:false},{left:'187.8vw',top:'57vh', visible:false},{left:'201.2vw',top:'57vh', visible:false},{left:'215vw',top:'57vh', visible:false},{left:'234.4vw',top:'57vh', visible:false},{left:'242.3vw',top:'57vh', visible:false},{left:'248.8vw',top:'55vh', visible:false},{left:'255vw',top:'55vh', visible:false},{left:'261.3vw',top:'55vh', visible:false},{left:'16vw',top:'34vh', visible:false},{left:'24.7vw',top:'22vh', visible:false},{left:'34vw',top:'33vh', visible:false},{left:'44vw',top:'35vh', visible:false},{left:'49.8vw',top:'35vh', visible:false},{left:'55.6vw',top:'35vh', visible:false},{left:'42vw',top:'22vh', visible:false},{left:'50vw',top:'14vh', visible:false},{left:'58vw',top:'22vh', visible:false},{left:'75.6vw',top:'35vh', visible:false},{left:'80.7vw',top:'35vh', visible:false},{left:'85.8vw',top:'35vh', visible:false},{left:'91vw',top:'35vh', visible:false},{left:'75vw',top:'10vh', visible:false},{left:'83.2vw',top:'1vh', visible:false},{left:'92vw',top:'10vh', visible:false},{left:'104.2vw',top:'35vh', visible:false},{left:'111vw',top:'35vh', visible:false},{left:'117.5vw',top:'35vh', visible:false},{left:'124.1vw',top:'35vh', visible:false},{left:'130.7vw',top:'35vh', visible:false},{left:'137.3vw',top:'35vh', visible:false},{left:'144vw',top:'35vh', visible:false},{left:'107vw',top:'0.8vh', visible:false},{left:'142vw',top:'0.8vh', visible:false},{left:'164vw',top:'33vh', visible:false},{left:'170.5vw',top:'33vh', visible:false},{left:'176.7vw',top:'33vh', visible:false},{left:'162vw',top:'12vh', visible:false},{left:'170.5vw',top:'4vh', visible:false},{left:'179vw',top:'12vh', visible:false},{left:'187.5vw',top:'33vh', visible:false},{left:'194.5vw',top:'33vh', visible:false},{left:'201.3vw',top:'33vh', visible:false},{left:'185vw',top:'15vh', visible:false},{left:'194.5vw',top:'4vh', visible:false},{left:'204vw',top:'15vh', visible:false},{left:'224.4vw',top:'6vh', visible:false},{left:'214vw',top:'31vh', visible:false},{left:'235vw',top:'31vh', visible:false},{left:'246vw',top:'30vh', visible:false},{left:'255vw',top:'24vh', visible:false},{left:'263.5vw',top:'30vh', visible:false}]
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
            const gunReload = new Audio(banditReload);
            gunReload.play();

            this.deathInterval= setTimeout( () => {
                const shot = new Audio(banditShot);
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
